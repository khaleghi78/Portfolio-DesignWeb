import React from 'react'
import Projects from '../components/Projects'


const Portfolio = () => {
  return (
    <section className='section bg-primary min-h-[1400px]' id='portfolio'>
    <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-portfolio relative
            before:absolute before:opacity-40 before:-top-[2rem] 
            before:-left-3/4 before:hidden before:lg:block'>My latest work</h2>
            <p className='subtitle'>React developers are software professionals
             who work with React to build UIs. By association, 
             React developers are also front-end
             developers as well as JavaScript developers.</p>
        </div>
        <Projects />
    </div>
    </section>
  )
}

export default Portfolio