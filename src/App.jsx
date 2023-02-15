import Layout from "layouts/Layout";
import Index from "pages";
import BorderCollie from "pages/bordercollie";
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
        <Layout>
          <Routes>
            <Route path="bordercollie" element={<BorderCollie />} />
            <Route path="rhodesian" element={<RhodesianInfoPage />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
