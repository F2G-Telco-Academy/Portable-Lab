import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
