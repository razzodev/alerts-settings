import AlertStore from "./Store";
import Card from "./components/Card";
import Field from "./components/Field";
import "./App.css";

function App() {
  const store = AlertStore.useState((s) => s);
  const basic = AlertStore.useState((s) => s.basic);
  const advanced = AlertStore.useState((s) => s.advanced);
  const handleSave = () => {
    AlertStore.update((s) => {
      s.isEdit = false;
    });
    console.log(JSON.stringify(store, null, 2));
  };
  return (
    <div className="App">
      <div id="header">
        <span className="title">Health Alerts</span>
      </div>
      <hr className="main-hr"></hr>
      <div id="main-wrapper">
        <Card title="Basic" path={basic}>
          <Field
            label={"Daily health report"}
            field={basic.daily}
            path="basic"
            textBefore="Send daily health report at:"
          />
          <Field
            label={"Monitor service"}
            field={basic.monitor}
            path="basic"
            textBefore="Wait"
            textAfter="minutes before sending repetative email alerts"
          />
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
          className={`${!store.isEdit && "btn-disabled"} button save`}
          onClick={() => store.isEdit && handleSave()}
        >
          SAVE
        </span>
        <span className={`${!store.isEdit && "btn-disabled"} button discard`}>
          Discard
        </span>
      </div>
    </div>
  );
}

export default App;
