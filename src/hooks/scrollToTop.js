import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()


  const excludedRoutes = ["ppc", "socialMarketing", "seo"]
  useEffect(() => {
       const shouldExclude = excludedRoutes.some(route =>
      pathname.includes(route)
    )
    if (!shouldExclude) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}, [pathname])

  return null
}