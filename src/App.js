import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="header">
        <span className="title">Health Alerts</span>
      </div>
      <hr></hr>
      <div id="main-wrapper"></div>
      <hr></hr>
      <div id="footer">
        <span className="button save">SAVE</span>
        <span className="button discard">Discard</span>
      </div>
    </div>
  );
}

export default App;
