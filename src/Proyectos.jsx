import "./Proyectos.css"

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Swal from 'sweetalert2';


export default function Proyectos({windowWidth}){
  // const swalContainerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  
  function proximamente() {
    Swal.fire({
      title: 'Próximamente...',
      text: '',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

    return(
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="container-slide-content" onClick={ () =>{setShowButtons(prev => !prev)} }>
            {/* <img src="src/assets/CajaDiaria.png"></img> */}
            {/* <span style={{color: 'black'}}>Estoy reacomodando la página 🧘</span> */}
            {
              // windowWidth > 900 && <img className="img-slide" src="./src/assets/dnpl900x710.png"></img>
            }
            {
              // windowWidth <= 900 && <img className="img-slide" src="./src/assets/dnpl900x710.png"></img>
            }
            {/* {
              windowWidth <= 500 && <img className="img-slide" src="./src/assets/dnpl316x400.png"></img>
            } */}
            <img className="img-slide" src="./src/assets/dnpl900x710.png"></img>
            { showButtons &&
              <div className="buttons-container-slide" onClick={(e) => e.stopPropagation()}>
                <div className="buttons-slide-closebar" >
                  <img src="./src/assets/close.png" width="20px" height="20px" onClick={ () => setShowButtons(false)}>
                  </img>
                </div>
                <div className="buttons-slide">
                  <button onClick={ (e) => {
                    e.preventDefault()
                    proximamente() 
                  }}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                      Documentación
                  </a>
                  </button>
                  <button >
                    <a href="https://javiergraff.com.ar" target="_blank" rel="noopener noreferrer">
                      Implementación
                    </a>
                    
                  </button>
                </div>
                
              </div>
            }  
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span style={{color: 'black'}}>Estoy reacomodando la página 🧘</span>
            <br></br>
            <span style={{color: 'black'}}>Pronto estare subiendo proyectos 🕰️</span>
          </div>
        </SwiperSlide>

      </Swiper>
    )
}