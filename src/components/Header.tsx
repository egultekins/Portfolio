import { Fragment } from "react/jsx-runtime";
import "../App.css"; 
function Header(){

    return(
        


        <Fragment>
        
           
           
                <div className="Navs max-h-20 px-10 py-6 flex items-center justify-between">

                    <span className="logo font-semibold ">Portfolio</span>

                    <ul className="flex content-center items-center justify-end gap-6" >
                        <li>About</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>



                </div>
              
            
            
            
        </Fragment>
    );

}

export default Header;