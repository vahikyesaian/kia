import './master.css'

export default function Fourthpage(){
    return(
        <div className="fourthp col-12 d-flex flex-wrap">
            <div className='col-12 col-md-6  d-flex flex-wrap'>
                <section className='col-6 '>
                    <p>find a dealer <span>^</span></p>
                </section>
                <section className='col-6 '>
                    <p>offers and incentives <span>^</span></p>
                    
                </section>
                <section className='col-6 '>
                    <p>get a local price <span>^</span></p>
                </section>
                <section className='col-6 '>
                    <p>certified pre-owned <span>^</span></p>
                </section>
            </div>
            <div className='col-12 col-md-6  d-flex align-items-end p-2 p-md-4'>
                <section className='col-10 col-md-10 car'>
                    <p>jd power award</p>
                    <h2>10 million vehicles sold</h2>
                    <a>learn more</a>

                </section>

            </div>

        </div>
    )
}