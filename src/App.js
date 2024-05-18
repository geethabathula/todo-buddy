import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-header"><Header /></div>
      <div className="app-content-main"><Main /></div>
      <div className="app-footer"><Footer /></div>
    </div>
  );
}

export default App;
