import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react';
import icon from "../componentes/img/icono.jpg"
import setup from "../componentes/img/setup.jpg"
import cascos from "../componentes/img/cascos.jpg"
import graficas from "../componentes/img/graficas.jpg"
import mouse from "../componentes/img/mouse.jpg"
import pcs from "../componentes/img/pcs.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useInView } from 'react-intersection-observer';
import fondo from "../componentes/img/fondo.png"
import YouTube from 'react-youtube';
import Menu from "../componentes/menu/Menu"
import Footer from '../componentes/menu/Footer';

const Principal = () => {

  //temporizador de <h1> descuento
  const miElemento = document.querySelector('#descuento');

  const animationRef = useRef(miElemento);

  function iniciarAnimacion() {
    animationRef.current.classList.add('rotate-scale-up');
  }

  useEffect(() => {
    setInterval(iniciarAnimacion, 3000);
  }, []);

  //viewPort para animaciones cuando se esta viendo
  const { ref, inView, entry } = useInView();

  //colocar varios useInView
  const [isVisible1, setIsVisible1] = useState(false);
  //const [isVisible2, setIsVisible2] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });


  useEffect(() => {
    if (inView1) {
      setIsVisible1(true);
    }
  }, [inView1]);

  //id video de youtube
  const video = "vwGotOUyhzU"

  return (
    <div>

      <Menu />

      <body style={{ background: "#2E3239" }}>

        <div style={{ backgroundColor: "#2E3239" }}>
          <Carousel fade >

            <Carousel.Item style={{ posititon: "absolute" }}>
              <img
                className="d-block w-100"
                style={{ width: '100%', height: '450px', filter: "blur(5px)", objectFit: "cover" }}
                src={setup}
                alt="First slide"
              />
              <Carousel.Caption>
                <img
                  style={{ width: '100%', height: '350px', borderRadius: "20px" }}
                  src={setup}
                  alt="First slide"
                />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ posititon: "absolute" }}>
              <img
                style={{ width: '100%', height: '450px', filter: "blur(5px)" }}
                src={setup}
                alt="First slide"
              />
              <Carousel.Caption>
                <img
                  style={{ width: '100%', height: '350px', borderRadius: "20px" }}
                  src={setup}
                  alt="First slide"
                />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ posititon: "absolute" }}>
              <img
                style={{ width: '100%', height: '450px', filter: "blur(5px)" }}
                src={setup}
                alt="First slide"
              />
              <Carousel.Caption>
                <img
                  style={{ width: '100%', height: '350px', borderRadius: "20px" }}
                  src={setup}
                  alt="First slide"
                />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div style={{ background: "linear-gradient(#2E3239 30%, #A2B2EE)", paddingTop: "100px", paddingBottom: "100px" }}>

          <Swiper
            className='container'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              350: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={cascos} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>

            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={setup} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={mouse} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={pcs} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={graficas} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-transparent text-white" style={{ borderColor: "transparent", borderRadius: "30px", height: "30vh" }}>
                <Card.Img className='imge' src={setup} alt="Card image" style={{ borderRadius: "30px", height: "30vh" }} />
              </Card>
              <br />
            </SwiperSlide>

          </Swiper>

        </div>


        <section ref={ref} style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", boxShadow: "0px 0px 5px 3px black" }}>

          <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>

            <div className={inView ? 'movimiento-img-medium' : 'Not visible'} style={{ width: "50vw", height: "30vw", margin: "0" }}>

              <div style={{ padding: "2vh" }}>

                <h1 ref={animationRef} className={inView ? 'movimiento' : 'Not visible'} id='descuento' style={{ color: "white", fontSize: "5vw" }} align="center" >Descuentos</h1>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5vw", background: "white", borderRadius: "50px" }}>
                  <div>
                    <h1 className={inView ? 'movimiento' : 'Not visible'}
                      style={{ color: "black", fontSize: "5vw", padding: "2vw" }} align="center" >25%</h1>
                  </div>
                  <div>
                    <h1 className={inView ? 'movimiento' : 'Not visible'}
                      style={{ color: "red", fontSize: "5vw", padding: "2vw" }} align="center" >50%</h1>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        <main ref={ref1} className='container' style={{ marginTop: "80px" }}>

          <div className={inView1 ? 'aparicion' : 'no-mostrar'} style={{ background: "#A2B2EE", padding: "3vw", borderRadius: "30px", transition: "1s", boxShadow: "0px 0px 15px 6px #A2B2EE" }} >
            <YouTube className='video' videoId={video} />
          </div>

        </main><br />

      </body>


      <Footer />

    </div>
  )
}

export default Principal