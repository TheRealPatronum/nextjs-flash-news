import { CryptoNews } from '../components/CryptoNews/CryptoNews'
import { LatestNews } from '../components/LatestNews/LatestNews'

export default function IndexPage() {
  return (
    <div className="flex justify-between">
      <LatestNews />
      <CryptoNews />
    </div>
  )
}
