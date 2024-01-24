// @flow strict
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import img1 from '../images/img-sondage.jpg';

function Home() {
   const backgroundImageStyle = {
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      minWidth: '100vw',
   };

   const textAnimation = useSpring({
      opacity: 1,
      transform: 'translateX(0%)', // Initial position
      from: { opacity: 0, transform: 'translateX(-100%)' }, // Starting position
      config: { duration: 9000 },
   });
   const textanimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)', // Initial position
    from: { opacity: 0, transform: 'translateX(100%)'}, // Starting position
    config: { duration: 9000 },
 });

 const buttonAnimation = useSpring({
  opacity: 1,
  transform: 'scale(1)', // Initial scale
  from: { opacity: 0, transform: 'scale(0)' }, // Starting scale
   config: { duration: 9000 },
   });
  
     
    

   return (
   
      <div className="text-black min-h-screen py-8 mx-8 flex flex-col justify-center items-center" style={backgroundImageStyle}>
         <animated.h1 style={textAnimation} className="text-5xl font-bold mb-6">
            Bienvenue sur notre plateforme de sondage
         </animated.h1>
         <animated.p style={textanimation} className="text-2xl font-bold mb-8">
            Participez à nos sondages et partagez votre opinion avec nous !!!
         </animated.p>

         <Link to="/connexion">
            <animated.button
               style={{ ...buttonAnimation, willChange: 'transform' }} className="mx-auto h-12 px-6 w-40 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
               Call To Action
            </animated.button>
         </Link>
      </div>
   );
}

export default Home;
