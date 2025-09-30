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

    // If no OpenAI API key is configured, return mock suggestions
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        suggestions: getMockSubjectSuggestions(message),
      });
    }

    const prompt = `Based on this contact form message, generate 3 professional and specific subject line suggestions. The subject lines should be concise (under 60 characters), clear, and appropriate for a professional portfolio contact form.

Message: "${message}"

Respond with a JSON array of subject line suggestions:
{
  "suggestions": [
    "Subject line 1",
    "Subject line 2", 
    "Subject line 3"
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates professional subject lines for contact form messages. Be concise, specific, and professional. Always respond with valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    const responseText = completion.choices[0]?.message?.content;
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const parsedResponse = JSON.parse(responseText);
    
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error('Subject generation error:', error);
    
    // Fallback to mock suggestions
    const { message } = await request.json();
    return NextResponse.json({
      suggestions: getMockSubjectSuggestions(message),
    });
  }
}

function getMockSubjectSuggestions(message: string) {
  const suggestions = [
    'New Project Inquiry',
    'Collaboration Opportunity',
    'Technical Question',
    'Portfolio Feedback Request',
    'Job Opportunity Inquiry',
  ];

  // Add context-based suggestions
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('job') || lowerMessage.includes('hire') || lowerMessage.includes('position')) {
    suggestions.unshift('Job Opportunity Inquiry');
  }
  
  if (lowerMessage.includes('collaborate') || lowerMessage.includes('work together') || lowerMessage.includes('partnership')) {
    suggestions.unshift('Collaboration Proposal');
  }
  
  if (lowerMessage.includes('question') || lowerMessage.includes('help') || lowerMessage.includes('how')) {
    suggestions.unshift('Technical Question');
  }
  
  if (lowerMessage.includes('feedback') || lowerMessage.includes('review') || lowerMessage.includes('opinion')) {
    suggestions.unshift('Portfolio Feedback Request');
  }
  
  if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('develop')) {
    suggestions.unshift('New Project Inquiry');
  }

  return suggestions.slice(0, 3);
}
