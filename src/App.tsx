import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Person from "./components/Person";
import Content from "./components/Content";
import WorkTable from "./components/WorkTable";
import ProjectCard from "./components/ProjectCard";
import Skilltable from "./components/Skilltable";
import CommentSection from "./components/ComSection"


const App: React.FC = () => {


  return (
    <Fragment>
      
      <Header/>
      <Person/>
      <Content/>
      <Skilltable/>
      <WorkTable headtitle="Last Works" Component={ProjectCard} />
      <WorkTable headtitle="Testimonal" Component={CommentSection} />
    </Fragment> 
    
  );
};

export default App;
