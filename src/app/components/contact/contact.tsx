"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../AnimatedText";
import AnimatedButton from "../AnimatedButton";
import { contactFormSchema, ContactFormData, FormAIState } from "../../utils/contactFormSchema";
import { aiService } from "../../utils/aiService";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [aiState, setAiState] = useState<FormAIState>({
    isAnalyzing: false,
    suggestions: [],
    lastAnalyzed: '',
    isEnabled: true,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const watchedMessage = watch('message');

  // AI analysis effect
  useEffect(() => {
    if (!aiState.isEnabled || !watchedMessage || watchedMessage.length < 10) {
      setAiState(prev => ({ ...prev, suggestions: [] }));
      return;
    }

    const analyzeContent = async () => {
      if (watchedMessage === aiState.lastAnalyzed) return;

      setAiState(prev => ({ ...prev, isAnalyzing: true }));
      
      try {
        const suggestions = await aiService.analyzeFormContent(watchedMessage, 'message');
        setAiState(prev => ({
          ...prev,
          suggestions,
          lastAnalyzed: watchedMessage,
          isAnalyzing: false,
        }));
      } catch (error) {
        setAiState(prev => ({ ...prev, isAnalyzing: false }));
      }
    };

    const timeoutId = setTimeout(analyzeContent, 1000);
    return () => clearTimeout(timeoutId);
  }, [watchedMessage, aiState.isEnabled, aiState.lastAnalyzed]);

  // Generate subject suggestions
  const generateSubjectSuggestions = async () => {
    if (!watchedMessage) return;

    try {
      const suggestions = await aiService.generateSubjectSuggestions(watchedMessage);
      if (suggestions.length > 0) {
        setValue('subject', suggestions[0]);
      }
    } catch (error) {
      console.warn('Failed to generate subject suggestions:', error);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - in production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
      setAiState(prev => ({ ...prev, suggestions: [], lastAnalyzed: '' }));
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 px-6 max-w-4xl mx-auto">
      <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-pink-700 mb-6 text-center"
      >
        Let&apos;s chat 💌
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.4}
        className="text-lg font-poppins text-rose-900 mb-8 text-center"
      >
        If you want to talk about projects, technology or husky dogs, write me!
      </AnimatedText>

      {/* AI-Powered Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-kawaii border border-pink-100"
      >
        {/* AI Assistant Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-poppins font-medium text-pink-700">AI Assistant</span>
          </div>
          <button
            type="button"
            onClick={() => setAiState(prev => ({ ...prev, isEnabled: !prev.isEnabled }))}
            className={`px-4 py-2 rounded-full text-sm font-poppins transition-all duration-300 ${
              aiState.isEnabled
                ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border border-pink-200'
                : 'bg-gray-100 text-gray-500 border border-gray-200'
            }`}
          >
            {aiState.isEnabled ? 'Enabled ✨' : 'Disabled'}
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-poppins font-medium text-pink-700 mb-2">
              Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-poppins"
              placeholder="Your beautiful name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 font-poppins"
              >
                {errors.name.message}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-poppins font-medium text-pink-700 mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-poppins"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 font-poppins"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Subject Field with AI Suggestions */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="subject" className="block text-sm font-poppins font-medium text-pink-700">
                Subject *
              </label>
              {aiState.isEnabled && watchedMessage && (
                <button
                  type="button"
                  onClick={generateSubjectSuggestions}
                  className="text-xs text-pink-500 hover:text-pink-700 font-poppins flex items-center gap-1"
                >
                  <span>✨</span> AI Suggest
                </button>
              )}
            </div>
            <input
              {...register('subject')}
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-poppins"
              placeholder="What's this about?"
            />
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 font-poppins"
              >
                {errors.subject.message}
              </motion.p>
            )}
          </div>

          {/* Message Field with AI Analysis */}
          <div>
            <label htmlFor="message" className="block text-sm font-poppins font-medium text-pink-700 mb-2">
              Message *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-poppins resize-none"
              placeholder="Tell me about your project, question, or just say hi! 🎀"
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 font-poppins"
              >
                {errors.message.message}
              </motion.p>
            )}

            {/* AI Suggestions */}
            <AnimatePresence>
              {aiState.isEnabled && aiState.suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🤖</span>
                    <span className="text-sm font-poppins font-medium text-pink-700">AI Suggestions</span>
                    {aiState.isAnalyzing && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-pink-300 border-t-pink-500 rounded-full"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    {aiState.suggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-sm text-pink-600 font-poppins"
                      >
                        <span className="font-medium">💡</span> {suggestion.suggestion}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <AnimatedButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={!isValid || isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </div>
              ) : (
                'Send Message ✨'
              )}
            </AnimatedButton>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-green-600 text-sm font-poppins flex items-center gap-2"
                >
                  <span>✅</span> Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-red-600 text-sm font-poppins flex items-center gap-2"
                >
                  <span>❌</span> Failed to send message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex justify-center gap-4 flex-wrap"
      >
        <AnimatedButton 
          variant="secondary" 
          size="md"
          onClick={() => window.open('mailto:licethovallesrodriguez@gmail.com', '_blank')}
        >
          📧 Email
        </AnimatedButton>
        
        <AnimatedButton 
          variant="secondary" 
          size="md"
          onClick={() => window.open('https://www.linkedin.com/in/liceth-ovalles-44897591/', '_blank')}
        >
          💼 LinkedIn
        </AnimatedButton>
        
        <AnimatedButton 
          variant="outline" 
          size="md"
          onClick={() => window.open('https://github.com/liceth', '_blank')}
        >
          🐙 GitHub
        </AnimatedButton>
      </motion.div>
    </section>
  );
}