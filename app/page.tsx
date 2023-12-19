import Image from 'next/image'
import { Button } from '@/components/UI/button'
import CountryInfo from '@/components/countryInfo'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <CountryInfo />
    </>
  )
}
