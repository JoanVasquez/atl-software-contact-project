export const saveObj = (label: string, obj: any) => {
  localStorage.setItem(label, JSON.stringify(obj));
};

export const getObj = (label: string) => {
  return JSON.parse(localStorage.getItem(label));
};
