import './master.css'
import logo from '../../assets/img/kia logo.svg'

export default function Footer(){
    return(
        <div className="footer col-12">
            <div className='col-10 d-flex flex-wrap justify-content-center'>
                <figure className='col-12'>
                    <img src={logo} />
                </figure>
                <section className='col-4'>
                    <ul className='col-12 p-0'>
                        <li className='col-12' style={{color:'white',fontWeight:'bolder'}}>vehicles</li>
                        <li className='col-12'>Certified Pre-Owned </li>
                        <li className='col-12'>Why Kia heart</li>
                        <li className='col-12'>Kia Collective </li>
                        <li className='col-12'>owners</li>
                        <li className='col-12'>vahik.yesaian66@gmail.com</li>
                    </ul>
                </section>
                <section className='col-4'>
                    <ul className='col-12 p-0'>
                        <li className='col-12' style={{color:'white',fontWeight:'bolder'}}>corporate</li>
                        <li className='col-12'>Inclusion and Diversity</li>
                        <li className='col-12'>Careers</li>
                        <li className='col-12'>Investors</li>
                        <li className='col-12'>Contact Us</li>
                        <li className='col-12'>Recalls</li>
                        <li className='col-12'>vahikyesaian_web</li>
                    </ul>
                </section>
                <section className='col-4'>
                    <ul className='col-12 p-0'>
                        <li className='col-12' style={{color:'white',fontWeight:'bolder'}}>legal</li>
                        <li className='col-12'>Privacy</li>
                        <li className='col-12'>Terms of Service</li>
                        <li className='col-12'>MPG Disclaimer</li>
                        <li className='col-12'>Accessibility</li>
                        <li className='col-12'>designed by vahik</li>
                    </ul>
                </section>
                <div className=' icon col-8 col-md-4'>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
                </div>
            </div>

        </div>
    )
}