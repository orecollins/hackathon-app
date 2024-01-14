
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import FormStudent from './components/FormStudent';
import FormRecruiter from './components/FormRecruiter';

function App() {
  return (
      <>
      <Router>
          <Routes>
              <Route
                  exact 
                  path="/"
                  element={<Home />}
              />
              <Route
                  path="/createstudentaccount"
                  element={<FormStudent />}
              />
              <Route
                  path="/createrecruiteraccount"
                  element={<FormRecruiter />}
              />
              <Route
                  path="*"
                  element={<Navigate to="/" />}
              />
          </Routes>
      </Router>
  </>
  );
}

export default App;
