import React from 'react'

const HeroCardTemplate = ({ img1, img2, img3 }) => {
  return (
    <div className="h-fit  items-center justify-center flex flex-row">
      <div className="card1 py-4  ">
        <img
          className="h-[800px] rounded-2xl object-cover pr-2"
          src={img1}
          alt=""
        />
      </div>

      <div className="card2 flex flex-col h-[800px]">
        <img
          className="h-[400px] object-cover  pb-2 pl-2 rounded-2xl"
          src={img2}
          alt=""
        />
        <img
          className="h-[400px] object-cover pt-2 pl-2 rounded-2xl"
          src={img3}
          alt=""
        />
      </div>
    </div>
  )
}

export default HeroCardTemplate
