import Image from 'next/image'
import { Button } from '@/components/UI/button'
import CountryInfo from '@/components/countryInfo'
import Services from '@/components/services'

export default function Home() {
  return (
    <>
      <CountryInfo />
      <Services />
    </>
  )
}
