import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./Pages/AboutUs";
import {Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree} from "./Pages/Services";
import { Events, EventsOne, EventsTwo } from "./Pages/Events";
//import Events from "./Pages/Events";
import Contact from "./Pages/ContactUs";
//import Support from "./pages/Support";
import Support from "./Pages/Support";
// import cards from "./components/cards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
return (
	<>

<h1>Welcome to FITPEO</h1>
        <div className="text-center text-danger my-5">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://th.bing.com/th/id/R.31e5c1e34e015fe0b8b43c46d13362b7?rik=Jhj%2bTgYdXVu4yw&riu=http%3a%2f%2fepiphanyvideoworks.com%2fScience%2fHughes%2fUnits%2fScientific+Method%2fScientificMethodPictures%2fbar+graph+(incomes).jpg&ehk=ay%2fb0gG6updxbTq3nbfTCeZngC4O%2f1He345yU6alWYQ%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..."/>
  <div class="card-body">
    
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://tallygraphs.com/wp-content/uploads/2018/12/TallyGraphs-Sales-Dashboard-2.png" class="card-img-top" alt="..."/>
  <div class="card-body">
   
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://metro.co.uk/wp-content/uploads/2017/11/aw_19-5k-money.png?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" class="card-img-top" alt="..."/>
  <div class="card-body">
    
   
  </div>
</div>
    </div>
  </div>
</div>
	
	<Router>
	<Sidebar/>
	
    
  
	{/* <Routes>
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/about-us/aim' element={<OurAim/>} />
		<Route path='/about-us/vision' element={<OurVision/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/events/events1' element={<EventsOne/>} />
		<Route path='/events/events2' element={<EventsTwo/>} />
		<Route path='/support' element={<Support/>} />
	</Routes> */}
	</Router>
	</>
);
}

export default App;
	