import Header from "./Components/Header";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Middle from "./Components/Middle";
import data from "./Components/data";
import img3 from '../src/images/img3.png'
import test2 from '../src/images/rec2.png'
import test3 from '../src/images/rec3.png'
import './App.css'
import {MdOutlineVisibility} from 'react-icons/md'
import {BsBag} from 'react-icons/bs'
import {BsCalendarEvent} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const  items = data.map(item=>{
    return(
      <Middle
      key={item.id}
      img={item.image}
      heading={item.heading}
      title={item.title}
      subtitle={item.subtitle}
      testimonial={item.testimonial}
      name={item.name}
      views={item.views}
      />
    )
  
    
  })
  return (
    <div className="App">
    
   
     <ChakraProvider>
     <Header/>
     <Card/>
     <Navbar/>
     </ChakraProvider>
     
     <section>
      {items}
     </section>
     <img src={img3} alt="" className="img1"/>
     <div className='meetup'>
      
      <div className="card1" width= {{ base: 'center', md: 'flex-start' }}>
      <p className="heading">🗓️ Meetup</p>
      <h2 className="title">Finance & Investment Elite Social Mixer @Lujiazui</h2>
      <div className="date--row">
      <p className='date'><BsCalendarEvent/><span >Fri, 12 Oct, 2018</span></p>
      <p className='location'> <GoLocation/><span>Ahmedabad, India</span></p>
      </div>
      <button className='btn'>Visit website</button>
      <div className="img2">
      <img src={test2} alt="" className="testimonial"/>
      <p className="name">Ronal Jones</p>
      <p className="views"><MdOutlineVisibility/><span>1.4k views</span></p>
      </div>
      </div>

      <div className="card1">
      <p className="heading">💼️ Job</p>
      <h2 className="title">Software Developer</h2>
      <div className="date--row">
      <p className='date'><BsBag/><span >Innovaccer Analytics Private Ltd.</span></p>
      <p className='location1'> <GoLocation/><span>Noida, India</span></p>
      </div>
      <button className='btn1'>Apply on Timesjobs</button>
      <div className="flex">
      <img src={test3} alt="" className="testimonial1"/>
      <p className="name">Joseph Gray</p>
      <p className="views"><MdOutlineVisibility/><span>1.4k views</span></p>
      </div>
      </div>
     
      
      
     
      

      </div>
     
    
      
    </div>
   
  );
}

export default App;
