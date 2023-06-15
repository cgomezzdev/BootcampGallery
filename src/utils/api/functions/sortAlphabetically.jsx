export const sortAlphabetically = ([...array],key) => {
  return array.sort((a, b) => a.localeCompare(b[key]));
};
