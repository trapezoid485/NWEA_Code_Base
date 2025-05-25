
import React from 'react';
import { cn } from "@/lib/utils";

interface StepTransitionProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  direction?: 'forward' | 'backward';
}

const StepTransition: React.FC<StepTransitionProps> = ({
  children,
  className,
  isActive = true,
  direction = 'forward',
}) => {
  const animationClass = isActive
    ? direction === 'forward'
      ? 'animate-slide-in'
      : 'animate-fade-in'
    : 'opacity-0';

  return (
    <div
      className={cn(
        "transition-all duration-300",
        isActive ? animationClass : "hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default StepTransition;
