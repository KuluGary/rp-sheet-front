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

export const deepEquals = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = typeof val1 === "object" && typeof val2 === "object";

    if ((areObjects && !deepEquals(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }

  return true;
};
