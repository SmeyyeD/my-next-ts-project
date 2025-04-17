import Link from 'next/link'
import React from 'react'

type Props = {
    id: string,
    cover: string,
    name: string,
    author: string,
    price: string,
}

function BookCard({id, cover, name, author, price}: Props) {
  return (
    <Link className='contents' href={`/books/${id}`}>
        <div className={`relative grid h-full justify-center gap-0  bg-[#F4F4FF] border border-[#090937]/10 rounded-sm w-[13rem] md:w-[16rem] lg:w-auto lg:gap-x-10 grid-cols-[auto_1fr] grid-rows-[auto_auto_1fr]`}>
            <div className='row-span-3'>
                <img src="https://s3.piton.com.tr/assignment/dune.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250417T142046Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=d3ffc680b79bd130b9277da2eed03d49dc87f1ecd8295dc8df2af950413340f3" className="object-cover w-auto h-full place-self-center" />
            </div>
            <div className='grid grid-cols-1 grid-rows-subgrid row-span-3 py-5'>
                <p className='font-semibold text-lg lg:text-xl text-[#090937] truncate'>{name}</p>
                <p className="font-semibold text-sm lg:text-base text-[#090937]/60 truncate">{author}</p>
                <p className='font-bold text-sm sm:text-xl lg:text-2xl text-[#6251DD] text-nowrap justify-start self-end'>{price}</p>
            </div>
        </div>
    </Link>
  )
}

export default BookCard