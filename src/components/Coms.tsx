import { Fragment } from "react/jsx-runtime";
import "../ComsData"
import Comsdata from "../ComsData";
import "../App.css"

function Coms(){
    return(

            <Fragment>
            {Comsdata.map((index) => 
                <div className="main">
                    <div key ={index.id} className="coms flex flex-col items-start text-start   overflow-hidden  shadow-lg p-11 justify-between  ">
                                        
                                    
                                        
                        <div className="Command">
                                    
                            <h6>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</h6>
                                    
                        </div>

                        <div className="profile flex flex-row gap-4 w-full">


                                
                            <img src={index.img} alt="Client" className="rounded-b-sm w-12 h-12  " />

                            <div className="profile-detail flex-col flex">
                                
                                <div className="star">
                                {index.star}
                                </div>

                                <div className="name">

                                <p>{index.name}</p>

                                <p className="firm">{index.name}</p>

                                </div>

                                

                            </div>

                        </div>
                    </div>
                </div>



                )}
                
            </Fragment>
            
            

            


            
            
     
    )
}
export default Coms;