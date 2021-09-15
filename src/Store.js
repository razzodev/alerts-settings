import { Store } from "pullstate";

const AlertStore = new Store({
  isAdvanced: true,
  basic: {
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
      children: {
        GB: {
          value: 1,
          name: "GB",
          type: "number",
          textAfter: "GB",
          active: true,
          isCheckbox: true,
          isLocked: true,
        },
        percentage: {
          value: 0.05,
          name: "percentage",
          type: "number",
          textAfter: "%",
          active: false,
          isCheckbox: true,
          isLocked: false,
        },
      },
    },
  },
});

export default AlertStore;
