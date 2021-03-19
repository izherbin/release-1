/* {search: ""}  true, {} true, {search: "hello"} false */
export const checkForBlankObj = (obj) =>
  Object.entries(obj).length === 0 || Object.values(obj).includes('');
