import CountryInfo from '@/components/countryInfo'
import Services from '@/components/services'
import Hero from '@/components/sections/Hero'
import TodoSection from '@/components/sections/TodoSection'
import PopularPlaces from '@/components/sections/PopularPlaces'
import FaqSection from '@/components/sections/FaqSection'
import TourSection from '@/components/sections/TourSection'


export default function Home() {
  return (
    <>
      <Hero />
      <CountryInfo />
      <Services />
      <TourSection />
      <TodoSection />
      <PopularPlaces />
      <FaqSection />
    </>
  )
}
