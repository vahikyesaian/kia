import './master.css'
import React from "react";
import Slider from "react-slick";
import slide1 from '../../assets/img/slide1.png'
import slide2 from '../../assets/img/slide2.png'
import slide3 from '../../assets/img/slide3.png'
import slide4 from '../../assets/img/slide4.png'
import slide5 from '../../assets/img/slide5.png'
import slide6 from '../../assets/img/slide6.png'

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <Slider {...settings} className='slider'>
      <div>
        <figure className='col-12 fig1'>
            <img src={slide1} className='col-6 ' />
        </figure>
      </div>
      <div>
        <figure className='col-12 fig2'>
            <img src={slide2} className='col-6 '/>
        </figure>
      </div>
      <div>
        <figure className='col-12 fig3'>
            <img src={slide3} className='col-6 '/>
        </figure>
      </div>
      <div>
        <figure className='col-12 fig4'>
            <img src={slide4} className='col-6 '/>
        </figure>
      </div>
      <div>
        <figure className='col-12 fig5'>
            <img src={slide5} className='col-6 '/>
        </figure>
      </div>
      <div>
        <figure className='col-12 fig6'>
            <img src={slide6} className='col-6 '/>
        </figure>
      </div>
    </Slider>
    <Info />
    </>
    
  );
}
function Info(){
    return(
        <div className="extra d-flex justify-content-center col-12 flex-wrap">
        <div className="info col-5 ">
           <p>2023</p>
           <h2>carnival MPV</h2>
           <div className='d-flex'>
           <p>$32900</p>
           <p>290 hp</p>
           <p>22 MPG comb.</p>
           </div>
        </div>
        <div className="more col-3 d-flex align-items-center justify-content-center">
        <section className='col-8 d-flex flex-wrap '>
            <a>build yours <span>^</span></a>
            <a>learn more</a>
        </section>
        </div>
        </div>
        
    )
}