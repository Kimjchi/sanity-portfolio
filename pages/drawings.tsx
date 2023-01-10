import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useNextSanityImage } from 'next-sanity-image';
import React from 'react'
import NextSanityImage from '../components/NextSanityImage';
import { getDrawings, Photo } from '../services';
import { sanityClient } from '../services/sanity';

interface DrawingsProps {
    drawings: Photo[]
  }

export default function drawings({drawings}: DrawingsProps) {
  return (
    <div className='container mx-auto px-5'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        {
          drawings.map(drawing => 
            {
              const imageProps = useNextSanityImage(
                sanityClient,
                drawing.image as SanityImageObject,
              );
              if (imageProps)
                return (
                  <span className='flex relative' key={drawing.id} >
                    <NextSanityImage 
                      key={drawing.id} 
                      image={drawing.image}   
                      imageProps={imageProps}     
                    />
                  </span>
              )
          }
          )
        }
      </div>
    </div>
  )
}

  export const getServerSideProps = async () => {
    const drawings = await getDrawings() || [];
    
    return {
      props: {
        drawings
      }
    }
  }