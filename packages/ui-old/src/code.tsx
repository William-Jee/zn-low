import { Button } from "../components/ui/button";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code className={className}>
      {children}
      <Button>1</Button>
    </code>
  );
}
