import React from 'react'
import styles, { layout } from '../style'
import Images from './Image';
import Image1 from '../assets/image1.jpg';
import { Button } from 'primereact/button';

const Details = () => {
  return (
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
            <div className='container mx-auto px-6 py-4'>
                <div className='grid grid-rows-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='md:col-span-1'>
                        <span className={`${styles.heading} text-lg md:text-xl lg:text-5xl leading-normal font-bold`}>
                            The Church is a Home for all to come together
                        </span>
                        <p className={`${styles.paragraph} mt-5 font-regular`}>Christ the Living Hope Community Church is a vibrant and inclusive place of worship and fellowship, where individuals from all walks of life come together to celebrate faith, find solace, and build community. Our church embraces diversity and offers a welcoming environment for everyone, fostering spiritual growth and a sense of belonging.</p>
                    </div>
                    <div className="md:col-span-1">
                    <div className="card rounded-md">
                      <Images src={Image1} className="w-full h-full rounded-md" style={{ borderRadius: '0.375rem' }}/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details