export const setNestedKey = (key, element, value) => {
  key.split(".").reduce((p, c, index) => {
    if (index === key.split(".").length - 1) {
      if (typeof p[c] !== "object" || Array.isArray(p[c])) {
        p[c] = value;
      }
      return p[c];
    } else {
      if (!p[c] || typeof p[c] !== "object") {
        p[c] = {};
      }
      return p[c];
    }
  }, element);

  return element;
};

export const getNestedKey = (string, element) => string.split(".").reduce((p, c) => (p && p[c]) || null, element);

export const swapElements = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
