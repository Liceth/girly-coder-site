import { AISuggestion } from './contactFormSchema';

// AI Service for form assistance and suggestions
export class AIService {
  private static instance: AIService;
  private apiKey: string;

  private constructor() {
    // In production, this would come from environment variables
    this.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  // Analyze form content and provide suggestions
  async analyzeFormContent(content: string, type: 'subject' | 'message'): Promise<AISuggestion[]> {
    if (!this.apiKey) {
      // Fallback to mock suggestions for demo purposes
      return this.getMockSuggestions(content, type);
    }

    try {
      const response = await fetch('/api/ai/analyze-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, type }),
      });

      if (!response.ok) {
        throw new Error('AI analysis failed');
      }

      const data = await response.json();
      return data.suggestions;
    } catch (error) {
      console.warn('AI service unavailable, using mock suggestions:', error);
      return this.getMockSuggestions(content, type);
    }
  }

  // Generate smart subject line suggestions
  async generateSubjectSuggestions(message: string): Promise<string[]> {
    if (!this.apiKey) {
      return this.getMockSubjectSuggestions(message);
    }

    try {
      const response = await fetch('/api/ai/generate-subject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Subject generation failed');
      }

      const data = await response.json();
      return data.suggestions;
    } catch (error) {
      console.warn('AI service unavailable, using mock suggestions:', error);
      return this.getMockSubjectSuggestions(message);
    }
  }

  // Check message tone and provide suggestions
  async analyzeTone(message: string): Promise<{ tone: string; suggestions: string[] }> {
    if (!this.apiKey) {
      return this.getMockToneAnalysis(message);
    }

    try {
      const response = await fetch('/api/ai/analyze-tone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Tone analysis failed');
      }

      return response.json();
    } catch (error) {
      console.warn('AI service unavailable, using mock analysis:', error);
      return this.getMockToneAnalysis(message);
    }
  }

  // Mock suggestions for demo purposes
  private getMockSuggestions(content: string, type: 'subject' | 'message'): AISuggestion[] {
    const suggestions: AISuggestion[] = [];

    if (type === 'subject') {
      if (content.length < 10) {
        suggestions.push({
          type: 'subject',
          suggestion: 'Consider adding more context to your subject line',
          confidence: 0.8,
          reasoning: 'Short subject lines may not provide enough context for the recipient',
        });
      }
    }

    if (type === 'message') {
      if (content.length < 50) {
        suggestions.push({
          type: 'message',
          suggestion: 'Your message could benefit from more detail about your project or inquiry',
          confidence: 0.7,
          reasoning: 'Detailed messages help me provide better assistance',
        });
      }

      if (!content.includes('?')) {
        suggestions.push({
          type: 'message',
          suggestion: 'Consider adding a specific question to make your inquiry clearer',
          confidence: 0.6,
          reasoning: 'Questions help structure the conversation and get specific answers',
        });
      }
    }

    return suggestions;
  }

  private getMockSubjectSuggestions(message: string): string[] {
    const suggestions = [
      'New Project Inquiry',
      'Collaboration Opportunity',
      'Technical Question',
      'Portfolio Feedback Request',
    ];

    // Add context-based suggestions
    if (message.toLowerCase().includes('job') || message.toLowerCase().includes('hire')) {
      suggestions.unshift('Job Opportunity Inquiry');
    }
    if (message.toLowerCase().includes('collaborate') || message.toLowerCase().includes('work together')) {
      suggestions.unshift('Collaboration Proposal');
    }
    if (message.toLowerCase().includes('question') || message.toLowerCase().includes('help')) {
      suggestions.unshift('Technical Question');
    }

    return suggestions.slice(0, 3);
  }

  private getMockToneAnalysis(message: string): { tone: string; suggestions: string[] } {
    const tone = message.includes('!') ? 'enthusiastic' : 
                 message.includes('?') ? 'inquisitive' : 
                 'professional';
    
    const suggestions = [];
    
    if (tone === 'enthusiastic') {
      suggestions.push('Great energy! Consider balancing enthusiasm with professionalism');
    } else if (tone === 'inquisitive') {
      suggestions.push('Good questions! Make sure to provide context for better responses');
    } else {
      suggestions.push('Professional tone is great! Consider adding a personal touch');
    }

    return { tone, suggestions };
  }
}

// Export singleton instance
export const aiService = AIService.getInstance();
