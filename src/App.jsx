import Header from './pages/header'
import Firstpage from './pages/firstpage'
import Secondpage from './pages/secondpage'
import Thirdpage from './pages/thirdpage'
import SimpleSlider from './pages/slider'
import Fourthpage from './pages/fourthpage'
import Fifthpage from './pages/fifthpage'
import Footer from './pages/footer'






export default function Main(){
  return(
    <main className='container-fluid container-xxl p-0 '>
      <Header />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <SimpleSlider />
      <Fourthpage />
      <Fifthpage />
      <Footer />
    </main>
  )
}