import React from 'react'
import HeroCardTemplate from '../HeroCardTemplate'

export const HomeHeroCardTemplate = () => {
  const props = {
    img1:
      'https://plus.unsplash.com/premium_photo-1661924223647-40abbac077c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    img2:
      'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    img3:
      'https://images.unsplash.com/photo-1644651434676-c1937ecad149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80',
  }
  return (
    <div>
      <HeroCardTemplate {...props} />
    </div>
  )
}
