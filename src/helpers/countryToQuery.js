export const countryToQuery = (countries) => {
  if (!countries) return;
  let queryString = "";
  for (const [key, value] of Object.entries(countries)) {
    if (value === true) {
      queryString = queryString.concat(key, ",");
    }
  }
  const fixedQueryString = queryString.substring(0, queryString.length - 1);
  return fixedQueryString;
};
