import { cn } from '../../lib/utils'
import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50',
        variant === 'primary' && 'bg-primary dark:bg-accent text-white hover:bg-primary/90 dark:hover:bg-accent/90',
        variant === 'outline' && 'border border-primary/20 dark:border-gray-600 text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800',
        variant === 'ghost' && 'text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-2.5 text-sm',
        size === 'lg' && 'px-8 py-3.5 text-base',
        className
      )}
      {...props}
    />
  )
}
