import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; /* importar router */

import "styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="rhodesian" element={<RhodesianInfoPage />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
