import Layout from "components/Layout";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* importar router */

import "styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Layout>
            <Route path="rhodesian" element={<RhodesianInfoPage />} />
            <Route path="/" element={<Index />} />
          </Layout>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
