import { useState, useEffect } from 'react'

const useWindowDimensions = (subtractedHeight = 0) => {
  const hasWindow = typeof window !== 'undefined'
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight - subtractedHeight : null
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow, subtractedHeight])

  return windowDimensions
}

export default useWindowDimensions
