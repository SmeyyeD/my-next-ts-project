import Link from 'next/link'
import React from 'react'
import CategoryRow from './CategoryRow'
const response = {
  "category": [
    {
      "id": 1,
      "name": "Best Seller",
      "created_at": "2023-01-09T14:37:19.138198"
    },
    {
      "id": 2,
      "name": "Classics",
      "created_at": "2023-01-09T17:18:06.806377"
    },
    {
      "id": 3,
      "name": "Children",
      "created_at": "2023-01-09T17:22:33.650278"
    },
    {
      "id": 4,
      "name": "Philosophy",
      "created_at": "2023-01-09T17:26:18.505812"
    }
  ]
}
function CategoryList() {
  return (
    <div className='flex flex-col gay-y-16'>
      {response.category?.map((category) => (
        <div key={category.id} className='flex flex-col gap-y-5'>

          <div className='flex justify-between h-auto'>
            <p className='text-[#090937] font-bold text-3xl'>{category.name}</p>
            <Link href={`/categories/${category.id}`} className='font-bold text-xl text-[#EF6B4A]'>Viev All</Link>
          </div>
          <CategoryRow/>
        </div>
      ))}
    </div>
  )
}

export default CategoryList

// Backend'ten gelen kategorileri önce map ile döndürdük. HEr bir categori için bir div oluşturduk. Hepsinde categori.name ve categor.id linklerini verdik. 