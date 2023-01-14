import React from 'react'
import { contact } from '../data'

const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-contact
                relative before:absolute before:opacity-40 before:-top-7
                before:-left-40 before:hidden before:lg:block'>Contact me</h2>
                <p className='subtitle'>While most believe that React is a framework,
                 this is probably the biggest misconception where React is involved. 
                 This mix-up occurs so regularly that it is entirely socially acceptable 
                 to call React a framework, and hardly a software developer
                 would turn their head. </p>
            </div>
            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <div className='flex flex-1 flex-col items-start space-y-8
                mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index) => {
                        const {icon, title, subtitle, description} = item;
                        return <div className='flex flex-col gap-x-4' key={index}>
                            <div className='text-accent rounded-sm w-14
                            h-14 flex items-start justify-center mt-2 mb-4 
                            lg:mb-0 text-2xl'>{icon}</div>
                            <h4 className='font-body text-xl mb-1'>{title}</h4>
                            <p className='mb-1'>{subtitle}</p>
                            <p className='text-accent font-normal'>
                            {description}</p>
                        </div>
                    })}
                </div>
              <form className='space-y-8 w-full max-w-[780px]'>
             <div className='flex gap-8'>
             <input type="text" className='input' placeholder='Your Name' />   
             <input type="text" className='input' placeholder='Your Email' /> 
            </div>    
            <input type="text" className='input' placeholder="Subject" />
            <textarea className='textarea' placeholder='Your message'></textarea>
            <button className='btn btn-lg bg-accent hover:bg-accent-hover'>
                Send Message 
            </button>
            </form>  
            </div>
        </div>
    </section>
  )
}

export default Contact