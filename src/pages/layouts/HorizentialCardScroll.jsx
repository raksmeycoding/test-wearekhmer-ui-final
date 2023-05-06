import React from 'react'
import Card from './Cards/Card'
import SeeMore from './SeeMore'

const HorizentialCardScroll = () => {
  return (
    <div className="mt-4">
      <SeeMore />
      <div className="flex flex-row gap-8 overflow-x-scroll pb-4 z-0 overflow-y-hidden">
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
    </div>
  )
}

export default HorizentialCardScroll
