import { useRouter } from 'next/router'
import vi from '@/lang/vi'
import en from '@/lang/en'

const useTrans = () => {
  const { locale } = useRouter()
  const trans = locale === 'vi' ? vi : en
  return trans
}

export default useTrans