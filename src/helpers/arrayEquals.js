export const equals = (arr1, arr2) => {
  // check if the two arrys are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  let isEqual = true;

  // checks if every element in one arrray is in the other
  arr1.forEach((element) => {
    if (!arr2.includes(element)) {
      isEqual = false;
    }
  });

  // else return true
  return isEqual;
};
