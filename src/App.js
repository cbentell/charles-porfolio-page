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
<Navbar/>
<AuthorCard/>
<EducationCard/>
<WorkCard/>
<Hobbies/>

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
          

            {/* <!-- Work --> */}
           

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Kwagei Group</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">EasyTech</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Epcot Center</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

            </div>
            {/* <!-- Education --> */}
       
            {/* <!-- Hobbies --> */}
           
          {/* <!-- /End replace --> */}
      </main>
    </div>

   </>
  );
}

export default App;
