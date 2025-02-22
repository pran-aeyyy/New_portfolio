import React from 'react'
import { useSelector } from 'react-redux'

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
        I am very interested in entrepreneurship and startups. I find the idea
        of creating something new and innovative to be very exciting. I believe
        that entrepreneurship is all about taking risks and being willing to
        fail in order to succeed. I also think that startups are a great way to
        create new jobs and help to drive economic growth. I am always looking
        for new opportunities to learn more about entrepreneurship and startups,
        and I hope to one day start my own business.
      </p>
    </div>
  )
}
