import React from 'react'
import { BsGithub, BsYoutube, BsFacebook, BsTwitter, BsAmd  } from "react-icons/bs";
import { SiAsus, SiMsibusiness, SiNvidia } from "react-icons/si"

const Footer = () => {
  return (
    <div> 
      {/* <div className='container text-center p-2' style={{position:"absolute"}}>
          <div className='marquee'>
             <SiAsus style={{ fontSize: '40px', color: "white", margin:"10px" }} />
             <SiMsibusiness style={{ fontSize: '40px', color: "white", margin:"10px" }} />
             <SiNvidia style={{ fontSize: '40px', color: "white", margin:"10px" }} />
             <BsAmd style={{ fontSize: '40px', color: "white", margin:"10px" }} />
             
             </div>
        </div> */}
      <footer style={{ background:"#212529", boxShadow: "0px 5px 5px -2px black inset", transition: "5s" }} >
        <div align='center' className='p-3'>
          <BsFacebook className='mx-5' style={{ fontSize: '40px', color: "white" }} />
          <BsGithub className='mx-5' style={{ fontSize: '40px', color: "white" }} />
          <BsYoutube className='mx-5' style={{ fontSize: '40px', color: "white" }} />
          <BsTwitter className='mx-5' style={{ fontSize: '40px', color: "white" }} />
        </div>
      </footer>
      
    </div>
  )
}

export default Footer