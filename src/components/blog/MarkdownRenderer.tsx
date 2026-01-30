import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-blog">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="font-mono font-bold text-4xl md:text-5xl text-foreground mb-8 mt-12 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-mono font-bold text-2xl md:text-3xl text-foreground mb-6 mt-10 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-mono font-bold text-xl md:text-2xl text-foreground mb-4 mt-8">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-mono font-semibold text-lg text-foreground mb-3 mt-6">
              {children}
            </h4>
          ),

          // Paragraphs
          p: ({ children }) => (
            <p className="text-foreground leading-relaxed mb-6 text-lg">
              {children}
            </p>
          ),

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-lg leading-relaxed pl-2">
              {children}
            </li>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r-lg italic text-muted-foreground">
              {children}
            </blockquote>
          ),

          // Code
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto mb-6">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-sm">
              {children}
            </pre>
          ),

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-border">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-mono font-semibold text-sm uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-foreground">{children}</td>
          ),

          // Horizontal rule
          hr: () => <hr className="my-12 border-border" />,

          // Strong/emphasis
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),

          // Images
          img: ({ src, alt }) => (
            <figure className="my-8">
              <img
                src={src}
                alt={alt || ""}
                className="w-full rounded-lg border border-border"
                loading="lazy"
              />
              {alt && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                  {alt}
                </figcaption>
              )}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
