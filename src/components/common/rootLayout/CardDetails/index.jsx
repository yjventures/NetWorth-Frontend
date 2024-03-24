import { cn } from '@/lib/utils'
import CardHeader from './CardHeader'

export default function CardDetails({ data, className }) {
  console.log(data)
  return (
    <section className={cn('rounded-2xl overflow-hidden mt-5', className)}>
      <CardHeader data={data} />
    </section>
  )
}
