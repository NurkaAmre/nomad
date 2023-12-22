
import Image from 'next/image'
import { Button } from '@/components/UI/button'
import CountryInfo from '@/components/countryInfo'
import Services from '@/components/services'
import Hero from '@/components/sections/Hero'
import Todo from '@/components/todo'

export default function Home() {
  return (
    <>
      <Hero />
      <CountryInfo />
      <Services />
      <Todo />
    </>
  )
}
