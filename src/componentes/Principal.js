import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react';
import icon from "../componentes/img/icono.jpg"
import setup from "../componentes/img/setup.jpg"
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

      <body style={{ background:"#2E3239"}}>

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
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Card className="bg-dark text-white " style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={icon} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>

            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={setup} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={icon} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={setup} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={icon} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                <Card.Img className='imge' src={setup} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
              </Card>
              <br />
            </SwiperSlide>

          </Swiper>

        </div>


        <section ref={ref} style={{ background: "#A2B2EE", display: "flex", justifyContent: "space-between", boxShadow: "0px 0px 5px 3px black" }}>

          <div className={inView ? 'movimiento-img-medium' : 'Not visible'} style={{ background: "linear-gradient(transparent 90% , white )" }}>

            <img alt='' src={setup} style={{
              width: "50vw",
              height: "30vw",
              opacity: "0.7",
            }} />

          </div>

          <div style={{ transition: "1s" }}>

            <div style={{ position: "absolute", top: "112%", left: "2%", width: "20vw", height: "10vw", background: "white", borderRadius: "20px", padding: "10px" }}>
              <h3 style={{ fontSize: "2vw" }}>¿te gusta?</h3>
              <p style={{ fontSize: "1vw" }}>Esto es una prueba para saber que tanto tengo que escribir qui y tener en cuenta el diseño y la estetica en lña pagina</p>
            </div>

            <div style={{ position: "absolute", top: "130%", left: "25%", width: "20vw", height: "15vw" }}>
              <Swiper
                className='container'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <Card className="bg-dark text-white " style={{ borderColor: "transparent", borderRadius: "30px" }}>
                    <Card.Img className='imge' src={icon} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
                  </Card>

                </SwiperSlide>

                <SwiperSlide>
                  <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                    <Card.Img className='imge' src={setup} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                    <Card.Img className='imge' src={icon} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="bg-dark text-white" style={{ borderColor: "transparent", borderRadius: "30px" }}>
                    <Card.Img className='imge' src={setup} alt="Card image" style={{ objectFit: "cover", borderRadius: "30px" }} />
                  </Card>
                </SwiperSlide>


              </Swiper>
            </div>

          </div>


          <div className={inView ? 'movimiento-img-medium' : 'Not visible'} style={{ width: "50vw", height: "30vw", backgroundImage: `url(${fondo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div style={{ padding: "2vw" }}>

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

        </section>


        <main ref={ref1} className='container' style={{ marginTop: "80px"}}>

            <div className={inView1 ? 'aparicion' : 'no-mostrar'} style={{ background: "#A2B2EE", padding: "3vw", borderRadius: "30px", transition: "1s", boxShadow: "0px 0px 15px 6px #A2B2EE" }} >
              <YouTube className='video' videoId={video} />
            </div>

        </main><br/ >

      </body>


      <Footer />

    </div>
  )
}

export default Principal