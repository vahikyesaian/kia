import './master.css'
import logo from '../../assets/img/kia logo.svg'
import '../../local.css'
import mega1 from '../../assets/img/mega1.png'
import megab1 from '../../assets/img/megab1.png'
import mega2 from '../../assets/img/mega2.png'
import megab2 from '../../assets/img/megab2.png'
import mega3 from '../../assets/img/mega3.png'
import megab3 from '../../assets/img/megab3.png'
import mega4 from '../../assets/img/mega4.png'
import megab4 from '../../assets/img/megab4.png'
import mega5 from '../../assets/img/mega5.png'
import megab5 from '../../assets/img/megab5.png'
import mega6 from '../../assets/img/mega6.png'
import megab6 from '../../assets/img/megab6.png'
import sub1 from '../../assets/img/sub1.png'
import sub2 from '../../assets/img/sub2.png'
import sub3 from '../../assets/img/sub3.png'
import sub4 from '../../assets/img/sub4.png'
import sub5 from '../../assets/img/sub5.png'
import sub6 from '../../assets/img/sub6.png'
import lastm1 from '../../assets/img/lastm1.png'
import lastm2 from '../../assets/img/lastm2.png'
import lastm3 from '../../assets/img/lastm3.png'
import lastm4 from '../../assets/img/lastm4.png'



export default function Header() {
    let count = 2
    let self = 2
    let temp = 2

    return (
        <div className="header col-12 ">
            <header className='col-12 tophead d-flex'>
                <section className='col-3 col-md-2'>
                    <figure className='col-12  '>
                        <img src={logo} alt={'kia logo'} className='col-10 col-xs-8 col-sm-6 ' />
                    </figure>
                </section>
                <section className='col-md-7 col-0 '>
                    <ul className='col-12  d-none d-lg-flex p-0'>
                        <li onClick={() => {

                            if (count % 2 == 0) {
                                document.getElementById('spn1').style.transform = 'rotate(0deg)'
                                document.getElementById('megamenu').style.opacity = '1'
                                document.getElementById('megamenu').style.visibility = 'visible'

                            } else {
                                document.getElementById('spn1').style.transform = 'rotate(180deg)'
                                document.getElementById('megamenu').style.opacity = '0'
                                document.getElementById('megamenu').style.visibility = 'hidden'


                            }
                            count++



                        }}><a>vehicle</a>
                            <ul className='col-12 p-0 ' id='megamenu'>
                                <li className='d-flex flex-wrap'>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={mega1} alt="" />
                                            <img src={megab1} alt="" />
                                        </figure>
                                        <p>Carnival MPV</p>
                                        <p>$32,900 </p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>

                                    </section>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={mega2} alt="" />
                                            <img src={megab2} alt="" />
                                        </figure>
                                        <p>Seltos</p>
                                        <p>$22,840 </p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>

                                    </section>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={mega3} alt="" />
                                            <img src={megab3} alt="" />
                                        </figure>
                                        <p>soul</p>
                                        <p>$19,790</p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>

                                    </section>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={mega4} alt="" />
                                            <img src={megab4} alt="" />
                                        </figure>
                                        <p>sportage</p>
                                        <p>$25,990  </p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>
                                    </section>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={mega5} alt="" />
                                            <img src={megab5} alt="" />
                                        </figure>
                                        <p>Sorento</p>
                                        <p>$29,990  </p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>

                                    </section>
                                    <section className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={mega6} alt="" />
                                            <img src={megab6} alt="" />
                                        </figure>
                                        <p>Telluride</p>
                                        <p>$35,690  </p>
                                        <p>build <span>^</span></p>
                                        <p>find nearby <span>^</span></p>

                                    </section>
                                </li>
                            </ul>
                        </li>
                        <span id='spn1'>^</span>
                        <li onClick={() => {

                            if (self % 2 == 0) {
                                document.getElementById('spn2').style.transform = 'rotate(0deg)'
                                document.getElementById('mega2').style.opacity = '1'
                                document.getElementById('mega2').style.visibility = 'visible'


                            } else {
                                document.getElementById('spn2').style.transform = 'rotate(180deg)'
                                document.getElementById('mega2').style.opacity = '0'
                                document.getElementById('mega2').style.visibility = 'hidden'

                            }
                            self++

                        }}><a>shopping assitant</a>
                            <ul className='col-12 p-0  ' id='mega2'>
                                <li className='d-flex flex-wrap'>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={sub1} />
                                        </figure>
                                        <p>build your kia <span>^</span></p>
                                        <p>Configure your next Kia, view pricing, and check availability.</p>
                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={sub2} />
                                        </figure>
                                        <p>payment calculator <span>^</span></p>
                                        <p>Determine your estimated monthly payment.</p>
                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={sub3} />
                                        </figure>
                                        <p>trade in <span>^</span></p>
                                        <p>Get your Kelley Blue Book® trade in value.</p>
                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={sub4} />
                                        </figure>
                                        <p>get a local price <span>^</span></p>
                                        <p>Connect with your local dealer for pricing and offers in your area.</p>
                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12 '>
                                            <img src={sub5} />
                                        </figure>
                                        <p>test drive <span>^</span></p>
                                        <p>Test drive your future vehicle at a dealership near you.</p>
                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={sub6} />
                                        </figure>
                                        <p>offers and incentives <span>^</span></p>
                                        <p>Find special offers near you.</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <span id='spn2'>^</span>
                        <li><a>inventory</a></li>
                        <li onClick={() => {
                            if (temp % 2 == 0) {
                                document.getElementById('spn3').style.transform = 'rotate(0deg)'
                                document.getElementById('mega3').style.opacity = '1'
                                document.getElementById('mega3').style.visibility = 'visible'


                            } else {
                                document.getElementById('spn3').style.transform = 'rotate(180deg)'
                                document.getElementById('mega3').style.opacity = '0'
                                document.getElementById('mega3').style.visibility = 'hidden'

                            }
                            temp++
                        }}><a>kia innovation </a>
                            <ul className='col-12 p-0  ' id='mega3'>
                                <li className='d-flex flex-wrap'>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={lastm1} alt="" />
                                        </figure>
                                        <p>ev and hybrid <span>^</span></p>
                                        <p>Explore electric, hybrid, and plug-in hybrid vehicles.</p>

                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={lastm2} alt="" />
                                        </figure>
                                        <p>safety tech <span>^</span></p>
                                        <p>Explore advanced safety and performance enhancing tech.</p>

                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={lastm3} alt="" />
                                        </figure>
                                        <p>connectivity <span>^</span></p>
                                        <p>Connect your smartphone or tablet to your vehicle with Kia Connect.</p>

                                    </div>
                                    <div className='col-4  m-5'>
                                        <figure className='col-12'>
                                            <img src={lastm4} alt="" />
                                        </figure>
                                        <p>sustainibility <span>^</span></p>
                                        <p>See how Kia is working toward a more sustainable future.</p>

                                    </div>
                                </li>
                            </ul>

                        </li>
                        <span id='spn3'>^</span>
                        <li><a>owners</a></li>
                    </ul>
                </section>
                <section className='col-9 col-md-3 d-none d-lg-flex justify-content-start align-items-center'>
                    <i className="bi bi-geo-alt-fill "></i>
                    <input type="text" placeholder='zip code' className='d-none d-md-flex' />
                    <a >find a dealer</a>
                </section>
                <Menuham />
            </header>
        </div>
    )
}
function Menuham() {
    let mine = 2
    return (
        <div className=" ham d-lg-none">
            <nav className='mobilemenu '>
                <ul id='mobmenu' className='p-0 '>
                    <li>vehicle  <span> ^</span></li>
                    <li>shopping assit <span> ^</span></li>
                    <li>inventory <span> ^</span></li>
                    <li>kia innovation <span> ^</span></li>
                    <li>owners <span> ^</span></li>
                </ul>
                <span><i className="bi bi-search"></i></span>
                <span id='ham' onClick={() => {
                    if (mine % 2 == 0) {
                        document.getElementById('mobmenu').style.transform = 'translatex(0)'
                        document.getElementById('ham').innerHTML = '<i class="bi bi-x-lg"></i>'



                    } else {
                        document.getElementById('mobmenu').style.transform = 'translatex(-400%)'
                        document.getElementById('ham').innerHTML = '<span>||</span>'



                    }
                    mine++

                }}>||</span>
            </nav>
        </div>
    )
}
