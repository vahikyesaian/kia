import './master.css'
import secpimg1 from '../../assets/img/secpimg1.jpg'
import secpimg2 from '../../assets/img/secpimg2.jpg'
import secpimg3 from '../../assets/img/secpimg3.jpg'


export default function Secondpage(){
    return(
        <div className="sp col-12 d-flex justify-content-center align-items-center flex-wrap ">
            <figure className='col-md-3 col-10'>
                <img src={secpimg1}  />
                <section className='col-12'>
                    <p>accelerating the future</p>
                    <h3>2023 kia ev6</h3>
                    <a>meet ev6</a>

                </section>
            </figure>
            <figure className='col-md-3 col-10'>
                <img src={secpimg2}  />
                <section className='col-12'>
                    <p>capable of big things</p>
                    <h3>refereshed 2024 seltos</h3>
                    <a>meet seltos</a>

                </section>
            </figure>
            <figure className='col-md-3 col-10'>
                <img src={secpimg3}  />
                <section className='col-12'>
                    <p>built for exploration</p>
                    <h3>2023 sportage</h3>
                    <a>meet sportage</a>

                </section>
            </figure>
        </div>
    )
}