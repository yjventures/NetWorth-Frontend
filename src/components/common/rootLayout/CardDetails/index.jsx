import { cn } from '@/lib/utils'
import CardHeader from './CardHeader'
import CardUserInfo from './CardUserInfo'

export default function CardDetails({ data, className }) {
  return (
    <section className={cn('rounded-2xl overflow-hidden mt-5 bg-white', className)}>
      <CardHeader data={data} />
      <CardUserInfo data={data} />
    </section>
  )
}
