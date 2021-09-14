import Store from "pullstate";

const AlertStore = new Store({
  isAdvanced: true,
  basic: {
    daily: {
      active: true,
      value: "08:00",
    },
    monitor: {
      value: 60,
    },
  },
  advanced: {
    diskStorage: {
      active: true,
      day: "Sunday",
      time: "08:00",
      gb: {
        active: true,
        value: 1,
      },
      percentage: {
        active: false,
        value: 0.05,
      },
    },
  },
});

export default AlertStore;
