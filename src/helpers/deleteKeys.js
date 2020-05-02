export const deleteKeys = (obj, keys) => {
  let newObj = JSON.parse(JSON.stringify(obj));
  let items = Object.keys(newObj);

  items.map((item) => {
    return keys.map((key) => {
      return delete newObj[item][key];
    });
  });

  return newObj;
};
