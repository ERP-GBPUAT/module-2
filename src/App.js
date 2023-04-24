import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from 'components/homePage';
import BasicDetails from 'components/new/BasicDetails'; 
import Caution from 'components/new/Caution'; 
import Food from 'components/new/Food'; 
import Tour from 'components/new/Tour';   

function App() {
  return (
    <div className="App">     
      <BrowserRouter>        
          <Routes>
            <Route path="/" element={<HomePage/>}/>   
            <Route path="/details" element={<BasicDetails/>}/> 
            <Route path="/caution" element={<Caution/>}/> 
            <Route path="/food" element={<Food/>}/>  
            <Route path="/tour" element={<Tour/>}/>
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
