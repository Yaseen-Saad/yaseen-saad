'use client'

import { useState, useEffect } from 'react'
import Loader from '@/components/ui/Loader'

export default function ClientLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return <Loader isLoading={isLoading} />
}
