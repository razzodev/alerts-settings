import { Store } from "pullstate";

export const initialStore = {
  isAdvanced: true,
  isEdit: false,
  basic: {
    name: "basic",
    isExpanded: true,
    daily: {
      name: "daily",
      active: true,
      isCheckbox: true,
      type: "time",
      value: "08:00",
    },
    monitor: {
      name: "monitor",
      active: true,
      isCheckbox: false,
      value: 60,
      type: "number",
    },
  },
  advanced: {
    name: "advanced",
    isExpanded: true,
    diskStorage: {
      name: "diskStorage",
      active: true,
      aggFunc: () => {},
      isCheckbox: true,
      value: {
        day: {
          name: "day",
          type: "select",
          value: "Sunday",
          options: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        time: {
          name: "time",
          type: "time",
          value: "08:00",
        },
      },
      selectedChildren: 1,
      children: {
        GB: {
          value: 1,
          name: "GB",
          type: "number",
          textAfter: "GB",
          active: true,
        },
        percentage: {
          value: 5,
          name: "percentage",
          type: "number",
          textAfter: "%",
          active: false,
        },
      },
    },
  },
};
const AlertStore = new Store({
  ...initialStore,
});
export default AlertStore;
