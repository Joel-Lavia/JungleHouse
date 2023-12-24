import '../Styles/Banner.css'
import Logo from '../assets/Icons/logo.png'
function Banner() {
 return(
    <div className='banner-logo'>
        <img src={Logo} alt="Logo jungle house" className='max-w-24' />
        <h1 className='text-2xl'>Jungle House</h1>
    </div>
 )   
}
export default Banner;