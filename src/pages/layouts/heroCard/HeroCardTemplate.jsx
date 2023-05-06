import React from 'react'
import CardBtns from '../../../components/cards/CardBtns'
import HeroCardBtn from '../../../components/cards/HeroCardBtn'

const HeroCardTemplate = ({ img1, img2, img3 }) => {
  return (
    <div className="h-fit w-full   items-center justify-center flex flex-row">
      <div className="card1 py-4 w-7/12">
        <img
          className="h-[800px] rounded-2xl object-cover pr-2"
          src={img1}
          alt=""
        />
        <div className="relative">
          <HeroCardBtn />
        </div>
      </div>

      <div className="card2 flex flex-col h-[800px] w-5/12">
        <img
          className="h-[400px] object-cover  pb-2 pl-2 rounded-2xl"
          src={img2}
          alt=""
        />
        <div className="relative">
          <HeroCardBtn />
        </div>
        <img
          className="h-[400px] object-cover pt-2 pl-2 rounded-2xl"
          src={img3}
          alt=""
        />
        <div className="relative">
          <HeroCardBtn />
        </div>
      </div>
    </div>
  )
}

export default HeroCardTemplate
