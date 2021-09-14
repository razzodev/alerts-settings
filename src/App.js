import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="header">
        <span className="title">Health Alerts</span>
      </div>
      <hr className="main-hr"></hr>
      <div id="main-wrapper">
        <Card title="Basic">
          <div>
            <label>Daily health report</label>
          </div>
          <div>
            <label>Monitor service</label>
          </div>
        </Card>
        <Card title="Advanced"></Card>
      </div>
      <hr className="main-hr"></hr>
      <div id="footer">
        <span className="button save">SAVE</span>
        <span className="button discard">Discard</span>
      </div>
    </div>
  );
}

export default App;
