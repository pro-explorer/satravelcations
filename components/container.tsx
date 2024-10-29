import { ReactNode } from 'react';
import { cx } from 'utils/all';

interface ContainerProps {
  children: ReactNode;
  large?: boolean;
  alt?: boolean;
  className?: string;
}

export default function Container({
  children,
  large = false,
  alt = false,
  className = ''
}: ContainerProps) {
  return (
    <div
      className={cx(
        'container mx-auto px-8 xl:px-5',
        large ? 'max-w-screen-xl' : 'max-w-screen-lg',
        !alt && 'py-5 lg:py-8',
        className
      )}
    >
      {children}
    </div>
  );
}
