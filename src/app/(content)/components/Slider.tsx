"use client"
import React, { useState } from 'react'


type Props = {
    images: string[];
};

function Slider({ images }: Props) {
    const [index, setIndex] = useState(0);
    return (
        <div className='w-full h-[25rem] overflow-hidden relative hidden md:block'>
            <div className='flex w-full h-full ease-in-out duration-200'
                // Flex ile tüm resimleri yanyana koyup overflow ile taşanları gizledim. translate ile kaydırma işlemi yaptım.

                style={{ translate: `${-100 * index}%` }}>

                {images.map((img, i) => (
                    <img
                        src={img}
                        key={i}
                        className='object-cover rounded-lg shrink-0 h-full w-full' />
                ))}
            </div>
            <div className='flex justify-center gap-2 absolute right-0 left-0 bottom-3'>
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setIndex(i);
                        }}
                        className={`rounded-full h-3 w-3 hover:cursor-pointer hover:scale-125 ${index === i
                                ? "bg-[#EF6B4A]"
                                : "bg-white"
                            }`}
                    > </div>
                ))}
            </div>
        </div>
    )
}

export default Slider;