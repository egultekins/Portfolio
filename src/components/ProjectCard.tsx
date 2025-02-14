import data from "../data.tsx";
import '../App.css'
import { Fragment } from "react/jsx-runtime";

function ProjectCard() {
    return (
            <Fragment>
            {data.map((er) => (
                <div key={er.id} className="flex flex-col items-start text-start bg-white  overflow-hidden p-3">
                    <div className="icon w-full">
                        <img 
                            src={er.image} 
                            alt="Icon" 
                            className="w-full aspect-[4/3] object-cover rounded-md"
                        />
                    </div>

                    <div className=" pt-5">
                        <h3 className="projectitle font-semibold text-lg">{er.title}</h3>
                    </div>

                    <div className=" w-full mt-3">
                        <p className="desc text-amber-500 text-sm">{er.description}</p>
                    </div>
                </div>
            ))}
            </Fragment>
    );
}

export default ProjectCard;
