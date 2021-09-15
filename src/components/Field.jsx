import React from "react";
import AlertStore from "../Store";
import NestedField from "./NestedField";
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
    edit();
  };

  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path][field.name].value = e.target.value;
    });
    edit();
  };

  const {
    active,
    name,
    isCheckbox,
    type,
    value,
    options,
    children,
    selectedChildren,
  } = field;
  return (
    <div className="field-wrapper">
      <div>
        <label>
          <strong>{label}</strong>
        </label>
      </div>
      <div className="field-main">
        {isCheckbox && (
          <input type="checkbox" checked={active} onChange={toggleActive} />
        )}
        <span className={`${!active && "disabled-text"} span`}>
          {textBefore}
        </span>
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
        <span className={`${!active && "disabled-text"} span`}>
          {textAfter}
        </span>
      </div>
      {children &&
        Object.keys(children).map((child) => (
          <NestedField
            path={[path, name]}
            field={children[child]}
            count={selectedChildren}
            isActive={active}
          />
        ))}
    </div>
  );
}

export default Field;
