export const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const lowercaseFirstLetter = (string) =>
  `${string.charAt(0).toLowerCase()}${string.slice(1)}`;

export const recursiveHandler = (arr) => {
  arr.forEach((v) => {
    v.chosen = false;
    if (v.children && v.children.length > 0) {
      recursiveHandler(v.children);
    }
  });
};
