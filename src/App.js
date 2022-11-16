import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import AuthorCard from "./components/AuthorCard";
import EducationCard from "./components/EducationCard";
import WorkCard from "./components/WorkCard";
import Hobbies from "./components/HobbiesCard";

function App() {
  return (
   <> 
  <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Navbar/>

          <AuthorCard/> 

          <EducationCard/>

          <WorkCard/>

          <Hobbies/>
          
          </div>
      </main>
    </div>   

  

   </>
  );
}

export default App;
