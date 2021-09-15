import AlertStore from "../Store";
import { edit } from "../utils";

function MultInputs({ path, field, isActive }) {
  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path[0]][path[1]].value[field.name].value = e.target.value;
    });
    edit();
  };

  const { type, value, options } = field;
  return (
    <>
      {type === "select" && (
        <select disabled={!isActive} onChange={(e) => updateInput(e)}>
          {options.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      )}
      {type !== "select" && (
        <input
          type={type}
          min={type === "number" && 0.1}
          value={value}
          onChange={(e) => updateInput(e)}
          disabled={!isActive}
        />
      )}
    </>
  );
}

export default MultInputs;
