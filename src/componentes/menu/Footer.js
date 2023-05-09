import React from 'react'
import { BsGithub, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";
import { GiRaceCar } from "react-icons/gi";
import { SiAsus, SiMsibusiness, SiNvidia } from "react-icons/si"

const Footer = () => {
  return (
    <div>
      <footer style={{ background:"#212529", boxShadow: "0px 5px 5px -2px black inset", transition: "5s" }} >
        <div align='center' className='p-3'>
          <a className='m-5 logo' href='#'><BsFacebook style={{ fontSize: '40px', color: "white" }} /></a>
          <a className='m-5' href='#'><BsGithub style={{ fontSize: '40px', color: "white" }} /></a>
          <a className='m-5' href='#'><BsYoutube style={{ fontSize: '40px', color: "white" }} /></a>
          <a className='m-5' href='#'><BsTwitter style={{ fontSize: '40px', color: "white" }} /></a>
        </div>

        <div className='text-center text-black p-3' style={{ backgroundColor: 'rgba(251, 251, 251, 0.5)' }}>
          <div className='marquee'>
             <SiAsus style={{ fontSize: '40px', color: "black", margin:"10px" }} />
             <SiMsibusiness style={{ fontSize: '40px', color: "black", margin:"10px" }} />
             <SiNvidia style={{ fontSize: '40px', color: "black", margin:"10px" }} />
             <SiNvidia style={{ fontSize: '40px', color: "black", margin:"10px" }} />
             
             </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer