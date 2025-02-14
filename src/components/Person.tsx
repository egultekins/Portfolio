import HeaderImg from '../assets/Headerimg.png'
import '../App.css'

function Person() {
    return (
      <div className="containert flex  w-full justify-between items-center p-14 ">
        
        {/* Sol Alan */}
        <div className="area1 max-w-2xl min-w-80 flex flex-col gap-6 pl-11">
          
          <span className="infohead text-lg font-semibold">
            Branding | Image making
          </span>
          
          <h1 className="titles text-10xl w-4xl font-semibold leading-16">Visual Designer</h1>
  
          <p className="text-gray-500">
            This is a template Figma file, turned into code using Anima. <br />
            Learn more at AnimaApp.com
          </p>
  
          <div className='btnarea pt-6'>
            <button className=" bttn bg-black text-white py-6 px-16 w-53 h-20 rounded-none">
              Contact
            </button>
          </div>
        </div>
  
        {/* Sağ Alan - Görsel */}
        <div className="area2 relative">
          <img
            src={HeaderImg}
            alt="Visual Designer"
            className="max-w-120 min-w-80 h-auto rounded-lg bg-white"
          />
        </div>
      </div>
    );
  }
  
  export default Person;
  