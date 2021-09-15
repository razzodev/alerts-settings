import React from "react";
import AlertStore from "../Store";
import "./NestedField.css";
import { edit } from "../utils";
function NestedField({ path, field, count, isActive }) {
  const toggleActive = () => {
    AlertStore.update((s) => {
      s[path[0]][path[1]].children[field.name].active = !field.active;
    });
    field.active && increment();
    !field.active && decrement();
    edit();
  };

  const increment = () =>
    AlertStore.update((s) => {
      s[path[0]][path[1]].selectedChildren++;
    });

  const decrement = () =>
    AlertStore.update((s) => {
      s[path[0]][path[1]].selectedChildren--;
    });

  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path[0]][path[1]].children[field.name].value = e.target.value;
    });
    edit();
  };
  const {
    active,
    // name,
    // isCheckbox,
    type,
    value,
    // options,
    textAfter,
    // children,
  } = field;

  return (
    <div id="nestedWrapper">
      <input
        id="nestedCheckbox"
        type="checkbox"
        checked={active}
        onChange={toggleActive}
        disabled={!isActive || (active && count === 1)}
      />
      <input
        type={type}
        value={value}
        onChange={(e) => updateInput(e)}
        disabled={!isActive || !active}
      />
      <span className={`${(!isActive || !active) && "disabled-text"} span`}>
        {textAfter}
      </span>
    </div>
  );
}

export default NestedField;
