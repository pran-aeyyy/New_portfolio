import React from 'react'
import { useSelector } from 'react-redux'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'

export default function Inspiration() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      className="my-8 max-w-[800px] w-full "
      style={{
        color: colorTheme.primaryText,
      }}
    >
      <h1 className="text-4xl font-bold text-center">Dreams & Inspiration</h1>
      <p className="text-center text-xl mt-8">
        In my free time, I love indulging in activities that keep me active and
        relaxed. One of my favorite pastimes is playing football—I enjoy the
        teamwork, strategy, and adrenaline rush that comes with being on the
        field. Music is another passion of mine; it helps me unwind and sets the
        perfect mood after a long day. I also find swimming incredibly
        refreshing, as it keeps me fit while allowing me to have fun. These
        hobbies not only bring me joy but also help me maintain a balanced and
        fulfilling lifestyle.
      </p>
    </div>
  )
}
