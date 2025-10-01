import { MDXRemote } from 'next-mdx-remote/rsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface ServerMDXContentProps {
  content: string;
}

// Custom components for MDX (Server Component - no animations)
const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl font-playfair font-bold text-pink-700 mt-12 mb-6"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-playfair font-semibold text-pink-700 mt-10 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-playfair font-semibold text-pink-700 mt-8 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-rose-800 font-poppins leading-relaxed mb-6"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside text-rose-800 font-poppins mb-6 space-y-2"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside text-rose-800 font-poppins mb-6 space-y-2"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-pink-300 pl-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-r-lg my-8 italic text-rose-700 font-poppins"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { className?: string }) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    
    if (language) {
      return (
        <div className="my-8">
          <SyntaxHighlighter
            language={language}
            PreTag="div"
            className="rounded-lg shadow-lg"
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
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
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg overflow-x-auto my-8"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: React.HTMLAttributes<HTMLAnchorElement> & { href?: string }) => (
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
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-pink-700" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-rose-600" {...props}>
      {children}
    </em>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="border-pink-200 my-12"
      {...props}
    />
  ),
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border border-pink-200 rounded-lg" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-pink-200 bg-pink-50 px-4 py-2 text-left font-poppins font-semibold text-pink-700"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-pink-200 px-4 py-2 text-rose-800 font-poppins"
      {...props}
    >
      {children}
    </td>
  ),
};

export function ServerMDXContent({ content }: Readonly<ServerMDXContentProps>) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
