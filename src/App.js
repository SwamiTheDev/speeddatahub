import "./App.css";
import Internet from "./component/InternetInfo/internet";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
            <Internet />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
