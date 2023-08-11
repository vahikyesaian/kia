import './master.css'
import vid1 from '../../assets/img/vid1.webm'
import fpimg from '../../assets/img/fpimg.jpg'


export default function Firstpage(){
    return(
        <div className="fp col-12">
            <video className='col-12 d-none d-md-flex' muted loop autoPlay >
                <source src={vid1} />
            </video>
            <div className='col-12'></div>
            <img src={fpimg} className='col-12 d-flex d-md-none' />
            <section className='col-md-8 col-11 '>
                <p>discover kia</p>
                <h2>movment</h2>
                <h2>that inspires</h2>
                <a>explore vehicles</a>
                <a>meet 2023 ev6</a>
            </section>

        </div>
    )
}