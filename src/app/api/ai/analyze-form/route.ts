import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { content, type } = await request.json();

    if (!content || !type) {
      return NextResponse.json(
        { error: 'Content and type are required' },
        { status: 400 }
      );
    }

    // If no OpenAI API key is configured, return mock suggestions
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        suggestions: getMockSuggestions(content, type),
      });
    }

    let prompt = '';
    if (type === 'message') {
      prompt = `Analyze this contact form message and provide helpful suggestions for improvement. Focus on clarity, completeness, and professionalism while maintaining a friendly tone.

Message: "${content}"

Provide 2-3 specific, actionable suggestions in JSON format:
{
  "suggestions": [
    {
      "type": "message",
      "suggestion": "specific improvement suggestion",
      "confidence": 0.8,
      "reasoning": "brief explanation of why this helps"
    }
  ]
}`;
    } else if (type === 'subject') {
      prompt = `Analyze this subject line and provide suggestions for improvement. Focus on clarity, specificity, and professional tone.

Subject: "${content}"

Provide 2-3 specific, actionable suggestions in JSON format:
{
  "suggestions": [
    {
      "type": "subject", 
      "suggestion": "specific improvement suggestion",
      "confidence": 0.8,
      "reasoning": "brief explanation of why this helps"
    }
  ]
}`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides constructive feedback on contact form messages. Be encouraging and specific in your suggestions. Always respond with valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseText = completion.choices[0]?.message?.content;
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const parsedResponse = JSON.parse(responseText);
    
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error('AI analysis error:', error);
    
    // Fallback to mock suggestions
    const { content, type } = await request.json();
    return NextResponse.json({
      suggestions: getMockSuggestions(content, type),
    });
  }
}

function getMockSuggestions(content: string, type: string) {
  const suggestions = [];

  if (type === 'message') {
    if (content.length < 50) {
      suggestions.push({
        type: 'message',
        suggestion: 'Consider adding more details about your project or specific questions you have',
        confidence: 0.8,
        reasoning: 'Detailed messages help provide more targeted and helpful responses',
      });
    }

    if (!content.includes('?')) {
      suggestions.push({
        type: 'message',
        suggestion: 'Adding a specific question can help structure the conversation',
        confidence: 0.7,
        reasoning: 'Questions make it easier to provide focused assistance',
      });
    }

    if (content.length > 200 && !content.includes('\n')) {
      suggestions.push({
        type: 'message',
        suggestion: 'Consider breaking your message into paragraphs for better readability',
        confidence: 0.6,
        reasoning: 'Well-structured messages are easier to read and respond to',
      });
    }
  }

  if (type === 'subject') {
    if (content.length < 10) {
      suggestions.push({
        type: 'subject',
        suggestion: 'Consider making your subject line more specific and descriptive',
        confidence: 0.8,
        reasoning: 'Specific subject lines help prioritize and categorize messages',
      });
    }

    if (content.length > 60) {
      suggestions.push({
        type: 'subject',
        suggestion: 'Consider shortening your subject line for better readability',
        confidence: 0.7,
        reasoning: 'Concise subject lines are more effective in email clients',
      });
    }
  }

  return suggestions;
}
