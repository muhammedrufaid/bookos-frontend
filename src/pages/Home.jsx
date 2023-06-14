import React from 'react'
import { useNavigate } from 'react-router-dom'
import man from "../images/man.png";

function Home() {
  const navbar =useNavigate()
  return (
  
   <div className="scrollable home align-items-center">
 
   <section className="align-items-center row">
     <div className="col-lg-6 col-md-12 col-sm-12">
       <div className="inner-sec">
         <h2 className="sec-head" style={{margin:'10px'}}>Welcome </h2>
         <p className="sec-para" style={{margin:'10px'}}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, repellat! Sit accusamus 
         architecto quam quasi sunt similique aperiam quas harum perspiciatis, repellendus eos 
         voluptatibus cupiditate ipsa libero quo tempore debitis?
         </p>
         <button className="ms-2 btn sec-btn , border border-secondary" onClick={()=>navbar("/signup")}  style={{borderRadius: '0rem', maxWidth: '400px',margin:'10px'}}>
           Join Us
         </button>
       </div>
     </div>
     <div className="col-lg-6 col-md-12 col-sm-12 text-center">
       <img src={man} alt="about" className="w-100" />
     </div>
   </section>
 </div>



 
   

  );
}

export default Home

 
 

