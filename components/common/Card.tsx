// File: src/components/ui/Card.tsx
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>{children}</div>;
export const CardHeader = ({ children, className = '' }: CardProps) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
export const CardTitle = ({ children, className = '' }: CardProps) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
export const CardDescription = ({ children, className = '' }: CardProps) => <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
export const CardContent = ({ children, className = '' }: CardProps) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
