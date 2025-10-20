interface PullQuoteProps {
  children: React.ReactNode;
  cite?: string;
}

export const PullQuote = ({ children, cite }: PullQuoteProps) => {
  return (
    <aside className="pull-quote text-center">
      <blockquote className="text-foreground font-mono leading-tight">
        {children}
      </blockquote>
      {cite && (
        <cite className="block mt-6 text-base font-sans text-muted-foreground not-italic">
          {cite}
        </cite>
      )}
    </aside>
  );
};