import { CATEGORIES_ITEMS } from '@/app/components/constant'
import Image from 'next/image'

export default function CategoryDetailPage(p: { params: { category: keyof typeof CATEGORIES_ITEMS } }) {
  const categoryItem = CATEGORIES_ITEMS[p.params.category]
  return (
    <div className="flex items-center space-x-4">
      <Image src={categoryItem.src} alt={categoryItem.alt} className="w10 h-10" />
      <h1 className="font-bold capitalize text-3xl">{p.params.category} News of</h1>
    </div>
  )
}
