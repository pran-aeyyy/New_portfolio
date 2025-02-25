import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      id="intro"
      style={{ color: colorTheme.primaryText }}
      className="max-w-[800px] w-full mx-auto"
    >
      <h1
        className="text-4xl text-center font-bold"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        My Projects
      </h1>
      <p
        className="text-center text-xl mt-4"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        Hi, {`I'm`} Pranay Gupta and I love making projects and solving real
        world problems. I enjoy learning new skills and technologies, and
        applying them to create cool and useful solutions. You can check them
        out on my GitHub page{' '}
        <Link className="font-bold" to={`https://github.com/pran-aeyyy`}>
          @iamPranayGupta{' '}
        </Link>{' '}
        . {`I'm`} always looking for new challenges and opportunities to learn
        and grow. If you have any questions or suggestions, feel free to contact
        me{' '}
        <Link to={`/contact`} className="font-bold">
          @Contact
        </Link>{' '}
        .
      </p>
    </div>
  )
}
