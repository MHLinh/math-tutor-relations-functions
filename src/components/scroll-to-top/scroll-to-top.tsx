import React, { useEffect } from "react"
import { useLocation  } from "react-router-dom"

/**
 * The component that scrolls to the top of the page on changing route.
 */
export function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (null)
}