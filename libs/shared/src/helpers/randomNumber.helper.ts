export const randomNumber = (length = 6) =>
  Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1),
  );
