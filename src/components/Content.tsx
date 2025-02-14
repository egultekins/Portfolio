import Logo1Img from '../assets/Group1.png'
import Logo2Img from '../assets/image2.png'
import Logo3Img from '../assets/image3.png'
import Logo4Img from '../assets/image4.png'
import Logo5Img from '../assets/image5.png'




function Content(){
    return(

        <div className="Brands flex justify-between items-center px-17 py-11  ">

            <img src={Logo1Img} alt="Google" className='w-1/10 h-auto rounded-lg' />
            <img src={Logo2Img} alt="Nike" className='w-1/13 h-auto rounded-lg' />
            <img src={Logo3Img} alt="Samsung" className='w-1/10 h-auto rounded-lg' />
            <img src={Logo4Img} alt="Apple" className='w-1/28 h-auto rounded-lg' />
            <img src={Logo5Img} alt="Adidas" className='w-1/18 h-auto rounded-lg' />


        </div>
    

    )

}
export default Content;