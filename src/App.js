// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Stepperh from "./Stepper";
// import PageOne from "./PageOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Stepper } from "@mui/material";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Stepperh />
                {/* <PageOne /> */}
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
