import React from 'react'
import Image from 'next/image'

interface NextSanityImageProps {
    image: any
    imageProps: any
}
export default function NextSanityImage({image, imageProps}:NextSanityImageProps) {
  return (
    <Image
			{...imageProps}
			placeholder="blur"
			blurDataURL={image.asset.metadata.lqip}
      objectFit='cover'      
		/>
  )
}