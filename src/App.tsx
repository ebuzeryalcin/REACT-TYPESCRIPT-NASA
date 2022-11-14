import Tab from './components/Tab';
import Detailed from './components/Detailed';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tab />} />
        <Route path="/Detailed/:id" element={<Detailed />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}


export default App;
