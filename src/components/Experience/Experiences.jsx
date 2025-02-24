import React, { useState } from 'react'
import { Typography, Chip } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GrUserManager } from 'react-icons/gr'
import { FaPython } from 'react-icons/fa'
import { GiSatelliteCommunication } from 'react-icons/gi'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { SiOpencv } from 'react-icons/si'
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
} from 'react-icons/pi'
import ExpMedia from './ExpMedia'
import cynaptoOfferLetter from '../../assets/cynapto_offer.png'
import cynaptoCompleteLetter from '../../assets/cynapto_complete.png'

export default function Experiences() {
  const expMediaData1 = [
    {
      img: cynaptoOfferLetter,
      title: 'Cynapto Technologies Pvt. Ltd. Offer Letter',
      description: 'Offer Letter for AI Intern Position',
    },
    {
      img: cynaptoCompleteLetter,
      title: 'Cynapto Technologies Pvt. Ltd. Complete Letter',
      description: 'Complete Letter',
    },
  ]

  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div className="mt-8" style={{ fontFamily: 'Pacifico, cursive' }}>
      <div className="my-4">
        <ExpContainer
          icon={<PiNumberCircleOneBold className="text-3xl" />}
          index={0}
        >
          <Typography
            variant="h4"
            className="font-bold text-center"
            sx={{ fontFamily: '"Pacifico", cursive' }}
          >
            Tech Team Lead @STeRG
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Aug 2022 - April 2024 · 1 Year & 8 mos
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Location : <span className=" font-bold"> MIT-WPU, Pune</span>
          </Typography>
          <Typography variant="h5" className="text-center mt-3">
            Skills{' '}
          </Typography>
          <div
            className="flex gap-3 justify-center flex-wrap my-2 max-w-[350px]"
            style={{
              color: colorTheme.primaryText,
            }}
          >
            <Chip
              label="Team Management"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <GrUserManager
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="Sattelite Communication"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <GiSatelliteCommunication
                  className="text-lg "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
          </div>
        </ExpContainer>

        <ExpContainer
          icon={<PiNumberCircleTwoBold className="text-3xl" />}
          index={1}
        >
          <Typography
            variant="h4"
            className="font-bold text-center"
            sx={{ fontFamily: '"Pacifico", cursive' }}
          >
            Associate AI/ML Developer
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            June 2024 - Dec 2024 · 6 mos
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Company :{' '}
            <Link to={''} className=" font-bold">
              {' '}
              Cynapto Technologies
            </Link>
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Location : <span className=" font-bold"> Mumbai </span>
          </Typography>
          <Typography variant="h5" className="text-center mt-3">
            Skills{' '}
          </Typography>
          <div
            className="flex gap-3 justify-center flex-wrap my-2 max-w-[350px]"
            style={{ color: colorTheme.primaryText }}
          >
            <Chip
              label="Python"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <FaPython
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="Artificial Intelligence"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <GiArtificialIntelligence
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="OpenCV"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <SiOpencv
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
          </div>
          <ExpMedia media={expMediaData1} />
        </ExpContainer>
        <ExpContainer
          icon={<PiNumberCircleThreeBold className="text-3xl" />}
          index={2}
        >
          <Typography variant="h6" className="font-bold text-center">
            Current Status : Self Learning
          </Typography>
        </ExpContainer>
      </div>
    </div>
  )
}

function ExpContainer({ children, index, icon }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div className="flex flex-col items-center justify-center border-l-2 relative md:pl-6 ">
      <span
        style={{ backgroundColor: colorTheme.primaryBg }}
        className="absolute top-0 left-[-1rem] w-8 h-8 rounded-full flex items-center justify-center  "
      >
        {icon}
      </span>
      {children}
    </div>
  )
}
