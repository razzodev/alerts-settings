import React from "react";
import AlertStore from "../Store";
import NestedField from "./NestedField";

function MultInputs({ path, field, isActive }) {
  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path[0]][path[1]].value[field.name].value = e.target.value;
    });
    console.log(e.target.value);
  };

  const { active, name, isCheckbox, type, value, options } = field;
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
          value={value}
          onChange={(e) => updateInput(e)}
          disabled={!isActive}
        />
      )}
    </>
  );
}

function Field({ label, field, path, textBefore, textAfter }) {
  const toggleActive = () => {
    AlertStore.update((s) => {
      s[path][field.name].active = !field.active;
    });
  };

  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path][field.name].value = e.target.value;
    });
  };

  const { active, name, isCheckbox, type, value, options, children } = field;
  return (
    <div>
      <div>
        <label>
          <strong>{label}</strong>
        </label>
      </div>
      {isCheckbox && (
        <input type="checkbox" checked={active} onChange={toggleActive} />
      )}
      <span className={!active && "disabled-text"}>{textBefore}</span>
      {typeof value !== "object" ? (
        <input
          type={type}
          value={value}
          onChange={(e) => updateInput(e)}
          disabled={!active}
        />
      ) : (
        Object.keys(value).map((child) => (
          <MultInputs
            path={[path, name]}
            field={value[child]}
            isActive={active}
          />
        ))
      )}

      {type === "select" && (
        <select>
          {options.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      )}
      <span className={!active && "disabled-text"}>{textAfter}</span>
      {children &&
        Object.keys(children).map((child) => (
          <NestedField path={[path, name]} field={children[child]} />
        ))}
    </div>
  );
}

export default Field;
