import Tab from './components/Tab';
import Detailed from './components/Detailed';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tab />} />
        <Route path="/Detailed/:id" element={<Detailed />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}


export default App;
