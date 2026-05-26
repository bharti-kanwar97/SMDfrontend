import { useEffect, useState } from "react"
import { FaArrowUpLong } from "react-icons/fa6";


export default function TopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300) // show after 300px scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="py-3 px-3 rounded-lg bg-neutral-500 fixed bottom-10 sm:bottom-30 lg:bottom-22 right-10 cursor-pointer shadow-lg hover:bg-neutral-600 transition"
      >
        <FaArrowUpLong className="text-white" />
      </button>
    )
  )
}

