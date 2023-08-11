import './master.css'
import fifthp1 from '../../assets/img/fifthp1.webp'
import fifthp2 from '../../assets/img/fifthp2.webp'
import fifthp3 from '../../assets/img/fifthp3.webp'
import lastm1 from '../../assets/img/lastm1.png'
import lastm2 from '../../assets/img/lastm2.png'
import lastm3 from '../../assets/img/lastm3.png'


export default function Fifthpage(){
    return(
        <div className="fifth d-flex flex-wrap">
            <section className='col-md-4 col-12'>
                <figure className='col-12'>
                    <img src={fifthp1} />
                </figure>
                <div>
                    <figure className='col-10'>
                        <img src={lastm1}/>
                    </figure>
                    <section className='col-12 sec1 d-flex flex-wrap justify-content-center'>
                        <h2>EV,hybrid and beyond</h2>
                        <p className='m-0'>Discover which Kia electric, hybrid, or</p>
                        <p> plug-in hybrid vehicle is right for you.</p>
                        <a>discover your ride</a>
                    </section>
                </div>
            </section>
            <section className='col-md-4 col-12'>
                <figure className='col-12'>
                    <img src={fifthp2} />
                </figure>
                <div>
                    <figure className='col-10'>
                        <img src={lastm3}/>
                    </figure>
                    <section className='col-12 sec2 d-flex flex-wrap justify-content-center'>
                        <h2>Get connected</h2>
                        <p>See how Kia Connect can enhance your driving experience.</p>
                        <a>meet kia connect</a>
                    </section>
                </div>
            </section>
            <section className='col-md-4 col-12'>
                <figure className='col-12'>
                    <img src={fifthp3} />
                </figure>
                <div>
                    <figure className='col-10'>
                        <img src={lastm2}/>
                    </figure>
                    <section className='col-12 sec3 d-flex flex-wrap justify-content-center'>
                        <h2>Keeping you safe</h2>
                        <p>Explore Kia’s suite of advanced safety features.</p>
                        <a>explore features</a>
                    </section>
                </div>
            </section>
        </div>
    )
}