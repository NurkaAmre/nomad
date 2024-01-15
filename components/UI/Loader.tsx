'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import loading from '@/public/loader.json'
import { useEffect } from 'react'

export default function LoadingAnimation({isFixed=true}: {isFixed?: boolean}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }
  , [])
  return (
    <div className={`flex items-center justify-center ${isFixed? 'fixed': 'absolute h-full w-full'} left-0 right-0 top-0 bottom-0 z-40 bg-slate-950/20 backdrop-blur-md`}>
      <div>
        <Player autoplay loop src={loading} className='player'></Player>
      </div>
    </div>
  )
}