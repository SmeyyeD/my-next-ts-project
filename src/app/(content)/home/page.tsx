import React from 'react'
import Slider from '../components/Slider'
import CategoryList from '../components/CategoryList'

const images = [
    "book1.png",
    "book2.png",
    "book3.png"
]

function Home() {
  return (
    <div>
        <Slider images={images}/>
        <CategoryList />
    </div>
  )

}
export default Home