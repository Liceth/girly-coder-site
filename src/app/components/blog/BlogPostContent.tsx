"use client";

import { motion } from "framer-motion";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostContentProps {
  content: string;
}

// Custom components for MDX
const components = {
  h1: ({ children, ...props }: any) => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-playfair font-bold text-pink-700 mt-12 mb-6"
      {...props}
    >
      {children}
    </motion.h1>
  ),
  h2: ({ children, ...props }: any) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl font-playfair font-semibold text-pink-700 mt-10 mb-4"
      {...props}
    >
      {children}
    </motion.h2>
  ),
  h3: ({ children, ...props }: any) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-xl font-playfair font-semibold text-pink-700 mt-8 mb-3"
      {...props}
    >
      {children}
    </motion.h3>
  ),
  p: ({ children, ...props }: any) => (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-rose-800 font-poppins leading-relaxed mb-6"
      {...props}
    >
      {children}
    </motion.p>
  ),
  ul: ({ children, ...props }: any) => (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="list-disc list-inside text-rose-800 font-poppins mb-6 space-y-2"
      {...props}
    >
      {children}
    </motion.ul>
  ),
  ol: ({ children, ...props }: any) => (
    <motion.ol
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="list-decimal list-inside text-rose-800 font-poppins mb-6 space-y-2"
      {...props}
    >
      {children}
    </motion.ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="border-l-4 border-pink-300 pl-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-r-lg my-8 italic text-rose-700 font-poppins"
      {...props}
    >
      {children}
    </motion.blockquote>
  ),
  code: ({ children, className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    
    if (language) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-8"
        >
          <SyntaxHighlighter
            style={tomorrow}
            language={language}
            PreTag="div"
            className="rounded-lg shadow-lg"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </motion.div>
      );
    }
    
    return (
      <code
        className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: any) => (
    <motion.pre
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg overflow-x-auto my-8"
      {...props}
    >
      {children}
    </motion.pre>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 transition-colors duration-200"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-pink-700" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic text-rose-600" {...props}>
      {children}
    </em>
  ),
  hr: ({ ...props }: any) => (
    <motion.hr
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-pink-200 my-12"
      {...props}
    />
  ),
  table: ({ children, ...props }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto my-8"
    >
      <table className="min-w-full border-collapse border border-pink-200 rounded-lg" {...props}>
        {children}
      </table>
    </motion.div>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="border border-pink-200 bg-pink-50 px-4 py-2 text-left font-poppins font-semibold text-pink-700"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td
      className="border border-pink-200 px-4 py-2 text-rose-800 font-poppins"
      {...props}
    >
      {children}
    </td>
  ),
};

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="prose prose-lg max-w-none"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-kawaii border border-pink-100">
        <MDXRemote source={content} components={components} />
      </div>
    </motion.div>
  );
}
