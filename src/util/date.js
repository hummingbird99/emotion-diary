// export const getStringDate = (date) => {
//   const offset = new Date(new Date() * 1 + 3600000 * 9)
//     .toISOString()
//     .replace("T", " ")
//     .replace(/\..*/, "");
//   return offset.slice(0, 10);
// };

export const getStringDate = (date) => {
  let year = date.getFullYear();

  let month = date.getMonth() + 1;

  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
