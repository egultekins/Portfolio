import Image from "../assets/Version=1.png"
import Image2 from "../assets/SkillsCardIcon.png"
import Image3 from "../assets/Version=3.png"
import Icon from "./SkillsCard"

function Skilltable(){

 
    return(
        <div className="flex pt-8 flex-row w-full items-center  justify-evenly ">
            <Icon image = {Image} titles = "Product Design" descriptions = "Some words that does not imply anything." />
            <Icon image = {Image2} titles = "Visual Design" descriptions = "Some words that does not imply anything." />
            <Icon image = {Image3} titles = "Product Design" descriptions = "Some words that does not imply anything." />
        
        </div>
    )
}

export default Skilltable;