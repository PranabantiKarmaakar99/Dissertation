// pages/index.js
/* eslint-disable */

'use client';
import './globals.css';

import { useEffect } from 'react';
import {gsap}  from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { CiHome } from "react-icons/ci";
import Image from 'next/image';
import abc from './public/image/2.jpg';
import b from './public/image/4.jpg';
import c from './public/image/5.jpg';
import d from './public/image/6.jpg';
import e from './public/image/7.jpg';
import f from './public/image/7.jpg';
import g from './public/image/6.jpg';
import { IoIosArrowRoundUp } from "react-icons/io";
import Slider from "react-slick";
import Link from 'next/link';



const Home = () => {
  var tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  useEffect(() => {
    let tl = gsap.timeline(
); // Initialize the GSAP timeline
    
    // First animation for navbar and logo elements
  
  //   {
  //     scrollTrigger: {
  //        trigger:'.section2',
  //        pin: true, // pin the trigger element while active
         
  //          // Start the animation when the heading is in view
  //         start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
  //         end: 'top 30%', // End the animation when the top of the heading reaches 30% of the viewport height
  //         scrub: true, // Smooth scrubbing, takes the animation to the current scroll position
  //         markers: true // Enable markers for debugging (remove in production)
  //     }
  // }
  
    // Second animation for '.lefthalf ' elements
    tl.fromTo(
      '.lefthalf .part1, .lefthalf .part2 ',
      { opacity: 0, x: -300 },
      {
        duration: 1,
        delay: 0.5,
        opacity: 1,
        x: 0,
        stagger: 0.5,
        onComplete: () => console.log('Part1 animation completed!'),
      }
    );
    // Third animation for '.lefthalf ' elements
    tl.fromTo(
      '.lefthalf .buttons button,.lefthalf .images .img',
      { opacity: 0, },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        stagger: 0.5,
        onComplete: () => console.log('Part1 animation completed!'),
      }
    );

     // Fourth animation for '.lefthalf ' elements
     tl.fromTo(
      '.righthalf ',
      { opacity: 0, },
      {
        duration: 1,
        
        opacity: 1,
        x: 0,
        stagger: 0.5,
        onComplete: () => console.log('Part1 animation completed!'),
      }
    );

       // Fifth animation for '.lefthalf ' elements
       tl.fromTo(
        '.righthalf .backGrnd',
        { opacity: 0, y:-300 },
        {
          duration: 1,
          
          opacity: 1,
          y: 0,
          
          onComplete: () => console.log('Part1 animation completed!'),
        }
      );
    
      tl.fromTo(
        '.navbar a, .navbar button, .logo a, .logo a h1',
        { opacity: 0, y: -30 },
        {
          duration: 1,
          delay: 1,
          opacity: 1,
          y: 0,
          stagger: 0.15,
          onComplete: () => console.log('Navbar animation completed!'),
        }
      );
            // Animate heading and text from below
            gsap.fromTo('.section2 .part1', { x:-100, opacity: 0 }, 
              { duration: 1, x: 0, opacity: 1 
              
              ,scrollTrigger:{trigger:'.section2',
                      // pin the trigger element while active
                     
                       // Start the animation when the heading is in view
                      start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
                      end: 'top 30%', // End the animation when the top of the heading reaches 30% of the viewport height
                       // Smooth scrubbing, takes the animation to the current scroll position
                      markers: true,
                      toggleActions: 'restart none none none', // Enable markers for debugging (remove in production)
                      }})
           
          
          // Animate cards with opacity changes
     
              gsap.fromTo('.cards div', { opacity: 0 }, { duration: 0.5, opacity: 1,stagger:.15,scrollTrigger:{trigger:'.section2 .cards',
                // pin the trigger element while active
               
                 // Start the animation when the heading is in view
                start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
                end: 'top 30%', // End the animation when the top of the heading reaches 30% of the viewport height
                 // Smooth scrubbing, takes the animation to the current scroll position
                markers: true,
                toggleActions: 'restart none none none', // Enable markers for debugging (remove in production)
                }} , `-=0.2`);

              gsap.fromTo('.section4 ', { x:-100, opacity: 0 }, 
                { duration: 1, x: 0, opacity: 1 
                
                ,scrollTrigger:{trigger:'.section4',
                        // pin the trigger element while active
                       
                         // Start the animation when the heading is in view
                        start: 'top 80%', // Trigger when the top of the heading reaches 80% of the viewport height
                        end: 'top 30%', // End the animation when the top of the heading reaches 30% of the viewport height
                         // Smooth scrubbing, takes the animation to the current scroll position
                        markers: true,
                        toggleActions: 'restart none none none',// Enable markers for debugging (remove in production)
                        }})
             
            
            
        
  
          // Cleanup on unmount
          // return () => {
          //     tl.kill(); // Kill the timeline when the component unmounts
          //     ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
          // };
  }, []);

  return (
    <div>
    <section className ="landingpage h-screen w-full flex flex-col bg-stone-100">
      <nav className='flex justify-between my-4 mx-4 h-14 logo'>
        <a className='flex gap-1 '><CiHome className='text-3xl ' />
        <h1 className='text-2xl font-semibold'>The Abode</h1>
        </a>
      
        <div className=' flex gap-8 justify-start text-sm navbar '>
        <Link href="/dashboard"> <a >About</a> </Link>
        <Link href="/shop"> <a>Shop</a> </Link>
        <Link href="/projects"> <a>Projects</a> </Link>
        <Link href="/about"> <a>Products</a> </Link>
       
        
          
        <Link href="/"> <button className='Estimate px-4 py-1 bg-black text-stone-200 rounded-lg'>Estimate</button> </Link>
          <button className='Signup px-4 py-1 border border-black text-black rounded-lg'> SignUp</button>
         
        </div>
      </nav>
      
      <div className=" center flex  w-full h-3/4   ">
        <div className='lefthalf flex  flex-col gap-4 w-1/2 '>
        <div className='part1 text-9xl  m-12'>
        Transform Your Space
      </div>
      <div className='buttons flex gap-2 mx-12'>
      <button className='Estimate px-4 py-2 flex bg-black text-stone-200 rounded-lg text-lg text-center '>Get an instant Estimate <IoIosArrowRoundUp className='rotate-45 text-4xl py-1'/></button>
          <button className='Signup px-4 py-2 flex border border-black text-black rounded-lg text-lg text-center'>Explore Design Packages <IoIosArrowRoundUp className='rotate-45 text-4xl py-1'/></button>
      </div>
      <div className='part2 text-lg  mx-12'>
      Create the home of your dreams with our tailored product and service packages, designed to fit your style and budget.
      </div>
      <div className='images flex gap-2 justify-start align-start  mx-12 h-40 overflow-hidden h-2/5 '>
        <Image src={b} alt='image1' width={200} height={100} className='img object-cover' />
        <Image src={c} alt='image1' width={200} height={100} className='img object-cover' />
        <Image src={d} alt='image1' width={200} height={100} className='img object-cover' />
      </div>
      
      
     
        </div>
      
      <div className='righthalf w-1/2 flex items-center justify-center h-full bg-stone-200 '>
        <div className=' backGrnd h-3/4 items-center justify-center  flex overflow-hidden  w-3/4'>
        <Image src={abc} alt='image' width={400} height={400} className='object-cover' /> 

        </div>
       
      
        
      </div>
      
     



      </div>
     

      <div className='marquee  w-full h-full'>
        <div className='marquee-content mt-16 font-dancing text-2xl text-stone-500 overflow-hidden flex gap-32 justify-center items-center h-fit text-nowrap'>
        {/* <span>Tata Avenida | Sanjeeva Town | Merlin One | NBCC | Rishi Ecoview | Sanjeeva Gardens | Swarn Court | GreenTown</span> */}
        <a className='px-10'> Sanjeeva Town</a>
        <a className='px-10'> Merlin One</a>
        <a className='px-10'>NBCC</a>
        <a className='px-10'>Rishi Ecoview</a>
        <a className='px-10'>Sanjeeva Gardens</a>
        <a className='px-10'>Swarn Court</a>
        <a className='px-10'>GreenTown</a> 
        <a className='px-10'> Sanjeeva Town</a>
        <a className='px-10'> Merlin One</a>
        <a className='px-10'>NBCC</a>
        <a className='px-10'>Rishi Ecoview</a>
        <a className='px-10'>Sanjeeva Gardens</a>
        <a className='px-10'>Swarn Court</a>
        <a className='px-10'>GreenTown</a>
        <a className='px-10'> Sanjeeva Town</a>
        <a className='px-10'> Merlin One</a>
        <a className='px-10'>NBCC</a>
        <a className='px-10'>Rishi Ecoview</a>
        <a className='px-10'>Sanjeeva Gardens</a>
        <a className='px-10'>Swarn Court</a>
        <a className='px-10'>GreenTown</a>
        </div>
      </div>

    </section>
     //Section2
    <section className ="section2 h-screen w-full bg-stone-100 flex items-center justify-center ">

     
            <div className="part1 w-full text-center p-8">
    <h2 className="text-4xl font-semibold">Design by Room</h2>
    <p className="text-sm mt-4">Select customized products and services by Rooms</p>

     {/* <div className='w-full grid grid-cols-2 mt-4 gap-10 '>
     <div className=' rounded-lg shadow-lg mx-12 h-fit flex border border-black gap-8 relative overflow-hidden'><Image src={c} alt='image1' className='object-contain h-fit w-full overflow-hidden' /> 
     <div className='flex flex-col gap-2 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>Kitchen <button className='bg-black rounded-lg py-1 px-2 text-white shadow-lg'>Start Here </button> </div>
     </div> */}

      <div className=" cards w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 mt-4 px-4">
      {/* Card 1 */}
      <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={c} alt="Kitchen"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end  bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">Kitchen</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 
       {/* Card 2 */}
       <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={e} alt="Kitchen"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end bg-white bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">Living</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 
       {/* Card 3 */}
       <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={abc} alt="Bedroom"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end bg-white bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">Bedroom</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 
       {/* Card 4 */}
       <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={d} alt="Kitchen"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end bg-white bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">Study</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 
       {/* Card 5 */}
       <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={d} alt="Kitchen"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end bg-white bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">WashRoom</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 
       {/* Card 6 */}
       <div className="rounded-lg shadow-lg mx-8 h-72 flex  relative overflow-hidden">
        <Image src={e} alt="Other"  className=" object-cover" />
        <div className="absolute inset-0 flex flex-col items-end  justify-end bg-white bg-opacity-50">
          <div className='m-10'>
          <h2 className="text-black text-xl font-semibold ">Other</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2 ">Start Here</button>


          </div>
        </div>
      </div> 

   
     </div>
      </div>

     

    </section>
  
    //Testimonial
   

<section className="testimonials h-screen w-full bg-stone-200 flex items-center justify-center">
      <div className="w-full text-center p-8">
        <h2 className="text-4xl font-semibold">Transformations We’ve Done</h2>
        <p className="text-sm mt-4">Check out our successful projects and read what our clients have to say.</p>

        {/* Carousel */}
        <div className="mt-24 px-4  ">
          <Slider {...settings} className=''>
            {/* Slide 1 */}
            <div className=" slide-container rounded-lg shadow-lg h-64 w-1/2 flex border border-black relative overflow-hidden">
              <Image src={d} alt="Case Study 1" className="object-cover h-full w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-semibold">Case Study: Modern Kitchen</h2>
                <p className="text-white text-sm mt-2">"The transformation was amazing!" - Client Name</p>
                <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Get Inspired</button>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="rounded-lg shadow-lg h-64 w-1/2 flex border border-black relative overflow-hidden">
              <Image src={d} alt="Case Study 2" className="object-cover h-full w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-semibold">Case Study: Modern Living Room</h2>
                <p className="text-white text-sm mt-2">"Loved the new look of my space!" - Another Client</p>
                <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Get Inspired</button>
              </div>

            </div>
             {/* Slide 3 */}
             <div className="rounded-lg shadow-lg h-64 w-1/2 flex border border-black relative overflow-hidden">
              <Image src={d} alt="Case Study 2" className="object-cover h-full w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-semibold">Case Study: Modern Living Room</h2>
                <p className="text-white text-sm mt-2">"Loved the new look of my space!" - Another Client</p>
                <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Get Inspired</button>
              </div>
              
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </section>
// Section4
    <section className="section4 product-catalog h-screen w-full bg-stone-100 flex items-center justify-center">
  <div className="part1 w-full text-center p-8">
    <h2 className="text-4xl font-semibold">Explore Our Product Line</h2>
    <p className="text-sm mt-4">Select from a wide range of products categorized for your convenience.</p>
    
   {/* Filter Options */}
<div className="filters flex gap-4 justify-center mt-4">
  <select className="filter-dropdown bg-black text-white px-4 py-2 rounded-lg" name="style" id="style">
    <option value="" disabled selected>Select Style</option>
    <option value="modern">Modern</option>
    <option value="classic">Classic</option>
    <option value="rustic">Rustic</option>
  </select>

  <select className="filter-dropdown bg-black text-white px-4 py-2 rounded-lg" name="price" id="price">
    <option value="" disabled selected>Select Price Range</option>
    <option value="low-high">Price: Low to High</option>
    <option value="high-low">Price: High to Low</option>
  </select>
</div>

    {/* Product Cards */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-4">
      {/* Card Example */}
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
      <div className="rounded-lg shadow-lg h-64 w-full flex border border-black relative overflow-hidden">
        <Image src={c} alt="Furniture" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Furniture</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</section>

//Design Gallery
<section className="inspiration-gallery h-screen w-full bg-stone-100">
  <div className="w-full text-center p-8">
    <h2 className="text-4xl font-semibold">Inspiration for Your Space</h2>
    <p className="text-sm mt-4">Browse through our mood boards and room styles to find the perfect look for your home.</p>

    {/* Inspiration Cards in a Collage Style */}
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 grid-rows-5 mt-8 px-4">
      
      {/* Card 1 */}
      <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden ">
        <Image src={b} alt="Mood Board 1" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Rustic Living Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 2" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Modern Kitchen</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 3" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Cozy Bedroom</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 4" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Elegant Dining Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>

       {/* Card 5 */}
       <div className="rounded-lg shadow-lg h-72 w-full flex justify-end border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 4" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Elegant Dining Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>
       {/* Card 6 */}
       <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 4" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Elegant Dining Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>
       {/* Card 7 */}
       <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 4" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Elegant Dining Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>
       {/* Card  */}
       <div className="rounded-lg shadow-lg h-72 w-full flex border border-black relative overflow-hidden">
        <Image src={b} alt="Mood Board 4" className="object-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-semibold">Elegant Dining Room</h2>
          <button className="bg-black rounded-lg py-1 px-2 text-white shadow-lg mt-2">Save to Wishlist</button>
        </div>
      </div>

      {/* Add more cards as needed */}
    </div>

    {/* <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Get a Personalized Estimate</button> */}
  </div>
</section>


//How it works
<section className="how-it-works h-screen w-full bg-stone-200 flex items-center justify-center">
  <div className="w-full text-center p-8">
    <h2 className="text-4xl font-semibold">How Our Design Process Works</h2>
    <p className="text-sm mt-4">We make the process simple and seamless for you.</p>

    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-4 ">
      <div className="step text-center">
        <Image src={b} alt="Book a Consultation" className="h-48 w-48 mx-auto mb-2 object-cover" />
        <h3 className="text-xl font-semibold">1. Book a Consultation</h3>
        <p className="text-sm">Get started with a free consultation.</p>
      </div>
      <div className="step text-center">
        <Image src={b} alt="Discuss Your Vision" className="h-48 w-48 mx-auto mb-2 object-cover" />
        <h3 className="text-xl font-semibold">2. Discuss Your Vision</h3>
        <p className="text-sm">We'll listen to your ideas and create a plan.</p>
      </div>
      <div className="step text-center">
        <Image src={b} alt="Receive a Custom Design" className="h-48 w-48 mx-auto mb-2 object-cover" />
        <h3 className="text-xl font-semibold">3. Receive a Custom Design</h3>
        <p className="text-sm">Get a personalized design for your space.</p>
      </div>
      <div className="step text-center">
        <Image src={b} alt="Implement the Design" className="h-48 w-48 mx-auto mb-2 object-cover" />
        <h3 className="text-xl font-semibold">4. Implement the Design</h3>
        <p className="text-sm">We’ll bring your dream space to life.</p>
      </div>
    </div>

    <button className="bg-black text-white px-4 py-2 rounded-lg mt-12 ">Start with an Initial Estimate</button>
  </div>
</section>

//Estimation tool

<section className="estimation-tool h-screen w-full bg-stone-100 flex items-center justify-center">
  <div className="text-center p-8 w-full max-w-lg">
    <h2 className="text-4xl font-semibold">Estimate Your Project</h2>
    <p className="text-sm mt-4">Input your project details and get an instant estimate.</p>

    {/* Estimation Form Example */}
    <form className="w-full grid grid-cols-1 gap-4 mt-8">
      <input 
        type="text" 
        placeholder="Room Size" 
        className="p-2 border border-black rounded-lg" 
      />
      <input 
        type="text" 
        placeholder="Style Preferences" 
        className="p-2 border border-black rounded-lg" 
      />
      <input 
        type="number" 
        placeholder="Budget" 
        className="p-2 border border-black rounded-lg" 
      />
    </form>

    <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">See Your Estimate</button>
  </div>
</section>

<footer className="bg-black text-white py-4">
  <div className="container mx-auto text-center">
    <p>&copy; 2024 The Abode. All Rights Reserved.</p>
    <div className="flex justify-center mt-2 space-x-4">
      <a href="/about" className="hover:underline">About</a>
      <a href="/shop" className="hover:underline">Shop</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
  </div>
</footer>






</div>
  );
};

export default Home;
