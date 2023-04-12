import "./App.css";
import Sidebar from "./Weather-Front/Sidebar";
import Footer from "./Weather-Front/Footer";
import Weather from "./Weather-Front/Weather";

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <h1>🌏 The Weather</h1>
        <div className="content">
          <Weather />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
