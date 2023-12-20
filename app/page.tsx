import Image from 'next/image'
import { Button } from '@/components/UI/button'
import CountryInfo from '@/components/countryInfo'
import Hero from '@/components/sections/Hero'
import PopularPlaces from '@/components/sections/PopularPlaces'

export default function Home() {
  return (
    <>
      <Hero />
      <CountryInfo />
      <PopularPlaces />
    </>
  )
}
