import AlertStore from "./Store";
import Card from "./components/Card";
import Field from "./components/Field";
import "./App.css";

function App() {
  const main = AlertStore.useState((s) => s);
  const basic = AlertStore.useState((s) => s.basic);
  const advanced = AlertStore.useState((s) => s.advanced);
  return (
    <div className="App">
      <div id="header">
        <span className="title">Health Alerts</span>
      </div>
      <hr className="main-hr"></hr>
      <div id="main-wrapper">
        <Card title="Basic" path={basic}>
          <div>
            <Field
              label={"Daily health report"}
              field={basic.daily}
              path="basic"
              textBefore="Send daily health report at:"
            />
          </div>
          <div>
            <Field
              label={"Monitor service"}
              field={basic.monitor}
              path="basic"
              textBefore="Wait"
              textAfter="minutes before sending repetative email alerts"
            />
          </div>
        </Card>
        <Card title="Advanced" path={advanced}>
          <Field
            label={"Server data disk space"}
            field={advanced.diskStorage}
            path="advanced"
            textBefore="Send daily health report at: "
            textAfter="when disk space has dropped below:"
          />
        </Card>
        <div style={{ height: "50vh" }}></div>
      </div>
      <hr className="main-hr"></hr>
      <div id="footer">
        <span
          className={`  button save ${!main.isEdit && "btn-disabled"}`}
          onClick={() => main.isEdit && console.log(main)}
        >
          SAVE
        </span>
        <span className={` ${!main.isEdit && "btn-disabled"} button discard`}>
          Discard
        </span>
      </div>
    </div>
  );
}

export default App;
