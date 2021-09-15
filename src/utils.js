import AlertStore from "./Store";

export const edit = () => {
  AlertStore.update((s) => {
    s.isEdit = true;
  });
};
