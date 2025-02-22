import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import jsonIcon from '../../assets/jsondb.jpg'
import videoSum from '../../assets/videoSum.png'
import blogImg from '../../assets/blog.png'
import carImg1 from '../../assets/car.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8 "
    >
      <h1
        className="text-3xl text-center font-bold max-w-[800]"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <ProjectCard
          title="Blog Generator Using LLama2"
          description="A simple Multi-AI AGENT bot that can help you write blogs on your favourite topics."
          image={blogImg}
          link="https://github.com/pran-aeyyy/Blog-Generator-Using-LLama2"
          delay={0.8}
        />
        <ProjectCard
          title="License Plate Recognition using YoloV7"
          description="A Computer Vision based project built using Yolov7 and OCR to read the number plates and save in a database."
          image={carImg1}
          link="https://github.com/pran-aeyyy/License_Plate_Recognition_YoloV7"
          delay={0.8}
        />
        <ProjectCard
          title="Video Summariser Multi Agent Bot"
          description="🚀 AI-powered video analysis tool that extracts insights and summaries from uploaded videos using Google Gemini AI and Phidata Agents."
          image={videoSum}
          link="https://github.com/pran-aeyyy/Video_Summariser_Agent"
          delay={0.8}
        />
      </div>
    </div>
  )
}
