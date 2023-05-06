import React from 'react'
import CardBtns from '../../../components/cards/CardBtns'
import HeroCardBtn from '../../../components/cards/HeroCardBtn'

const HeroCardTemplate = ({ img1, img2, img3 }) => {
  return (
    <div className=" items-center justify-center flex gap-2 flex-row ">
      <div className="card1  w-7/12 ">
        <div className="mr-1">
          <img
            className="h-[810px] rounded-2xl object-cover"
            src={img1}
            alt=""
          />
          <div className="relative ">
            <HeroCardBtn />
          </div>
        </div>
      </div>

      <div className="card2 flex flex-col h-[810px] w-5/12 gap-2 justify-between">
        <div className="">
          <img
            className="h-[400px] w-full object-cover rounded-2xl"
            src={img2}
            alt=""
          />
          <div className="relative">
            <HeroCardBtn />
          </div>
        </div>
        <div className="">
          <img
            className="h-[400px] w-full object-cover rounded-2xl"
            src={img3}
            alt=""
          />
          <div className="relative ">
            <HeroCardBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCardTemplate
