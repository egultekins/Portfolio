import {FC} from 'react';




interface WorkTableprops{
    Component: FC<any>;
    headtitle: string;

    

}



 const WorkTable = ({Component, headtitle }: WorkTableprops) => {
    return (
        <div className="allworkcont flex flex-col py-10 px-6 gap-10">
            <div className="head flex flex-row items-center justify-center">
                <h4 className="text-3xl font-bold"> {headtitle}</h4>
            </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-full px-5">
                
                <Component/>
           
               
            </div>

            
        </div>
    );
}

export default WorkTable;
