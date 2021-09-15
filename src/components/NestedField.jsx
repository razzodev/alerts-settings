import React from "react";
import AlertStore from "../Store";
function NestedField({ path, field }) {
  const toggleActive = () => {
    AlertStore.update((s) => {
      s[path[0]][path[1]].children[field.name].active = !field.active;
    });
  };

  const updateInput = (e) => {
    AlertStore.update((s) => {
      s[path][field.name].value = e.target.value;
    });
  };
  const {
    active,
    name,
    isCheckbox,
    type,
    value,
    options,
    textAfter,
    children,
  } = field;

  return (
    <div>
      {isCheckbox && (
        <input type="checkbox" checked={active} onChange={toggleActive} />
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => updateInput(e)}
        disabled={!active}
      />
      <span className={!active && "disabled-text"}>{textAfter}</span>
    </div>
  );
}

export default NestedField;
