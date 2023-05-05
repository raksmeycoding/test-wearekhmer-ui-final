import React from 'react'
import Card from './Cards/Card'
import SeeMore from './SeeMore'

const HorizentialCardScroll = () => {
  return (
    <>
      <SeeMore />
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default HorizentialCardScroll
