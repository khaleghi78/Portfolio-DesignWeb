import React from "react";
import TestimonialsSlider from "../components/TestimonialsSlider";

const Testimonials = () => {
  return (
   <section className="section bg-secondary" id="testimonials">
    <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-testimonials
            relative before:absolute before:opacity-40 before:-top-[2rem]
            before:-left-64 before:hidden before:lg:block">
            What other people say</h2>
            <p className="subtitle">To find more answers related to
             “What does a developer do?”, don’t scurry away.
             Today, you’ll take a deep dive into learning what 
             a React developer can do for your business,
             as well as the cost and skills associated with the profession.</p>
        </div>
        <TestimonialsSlider />
    </div>
   </section>
  )
};

export default Testimonials;
