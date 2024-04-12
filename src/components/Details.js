import React from 'react'
import styles, { layout } from '../style'

const Details = () => {
  return (
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
            <div className='container mx-auto px-6 py-4'>
                <div className='grid grid-rows-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <span className={`${styles.heading2} md:col-span-1 text-lg md:text-xl lg:text-5xl leading-normal font-bold`}>
                        The Church is a Home for all to come together
                    </span>
                    <div className="md:col-span-1">
                        {/* Content for right side */}
                        sdsdsdsds
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details