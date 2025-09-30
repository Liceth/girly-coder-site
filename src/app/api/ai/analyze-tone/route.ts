import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // If no OpenAI API key is configured, return mock analysis
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(getMockToneAnalysis(message));
    }

    const prompt = `Analyze the tone of this contact form message and provide suggestions for improvement. Focus on professionalism, clarity, and friendliness.

Message: "${message}"

Respond with JSON in this format:
{
  "tone": "professional|friendly|enthusiastic|formal|casual",
  "suggestions": [
    "specific suggestion 1",
    "specific suggestion 2"
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that analyzes the tone of contact form messages and provides constructive suggestions. Be encouraging and specific. Always respond with valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const responseText = completion.choices[0]?.message?.content;
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const parsedResponse = JSON.parse(responseText);
    
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error('Tone analysis error:', error);
    
    // Fallback to mock analysis
    const { message: messageContent } = await request.json();
    return NextResponse.json(getMockToneAnalysis(messageContent));
  }
}

function getMockToneAnalysis(message: string) {
  const suggestions = [];
  let tone = 'professional';

  // Simple tone detection based on content
  if (message.includes('!')) {
    tone = 'enthusiastic';
    suggestions.push('Great energy! Consider balancing enthusiasm with professionalism');
  } else if (message.includes('?')) {
    tone = 'inquisitive';
    suggestions.push('Good questions! Make sure to provide context for better responses');
  } else if (message.toLowerCase().includes('hey') || message.toLowerCase().includes('hi there')) {
    tone = 'casual';
    suggestions.push('Friendly tone! Consider adding more professional context');
  } else if (message.length > 200 && !message.includes('\n')) {
    tone = 'formal';
    suggestions.push('Professional tone is great! Consider breaking into paragraphs for readability');
  } else {
    tone = 'professional';
    suggestions.push('Professional tone is perfect! Consider adding a personal touch');
  }

  // Additional suggestions based on content
  if (message.length < 30) {
    suggestions.push('Consider adding more detail about your inquiry or project');
  }

  if (!message.includes('.')) {
    suggestions.push('Consider using proper punctuation for better clarity');
  }

  return {
    tone,
    suggestions: suggestions.slice(0, 2), // Limit to 2 suggestions
  };
}
