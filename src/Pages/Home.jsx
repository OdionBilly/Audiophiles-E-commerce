// import React from 'react'
import Bottom from '../components/Bottom'
import Hero from '../components/Hero'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ duration: 1 }}
    > 

    <div>
        <Hero/>
        <Bottom/>
    </div>
    </motion.div>
  )
}
