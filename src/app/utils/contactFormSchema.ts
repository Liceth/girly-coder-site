import { z } from 'zod';

// Contact form validation schema with Zod
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  // Optional fields for AI enhancement
  aiSuggestion: z.boolean().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// AI suggestion types for form enhancement
export interface AISuggestion {
  type: 'subject' | 'message' | 'tone';
  suggestion: string;
  confidence: number;
  reasoning: string;
}

// Form state for AI assistance
export interface FormAIState {
  isAnalyzing: boolean;
  suggestions: AISuggestion[];
  lastAnalyzed: string;
  isEnabled: boolean;
}
