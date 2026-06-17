import { cn } from '../../lib/utils'
import { type HTMLAttributes } from 'react'

export default function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto max-w-[1100px] px-5', className)} {...props} />
}
