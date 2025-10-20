interface BlueprintDividerProps {
  label: string;
}

export const BlueprintDivider = ({ label }: BlueprintDividerProps) => {
  return (
    <div className="newspaper-divider relative">
      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};
