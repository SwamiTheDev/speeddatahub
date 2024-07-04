import "./App.css";
import Navbar from "./component/Navbar/Nabar";
import Layout from "./Layout/layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="container">
          <Layout />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
