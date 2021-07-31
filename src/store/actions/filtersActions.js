export const genderAction = (gender) => ({ type: "GENDER", payload: gender });

export const countriesAction = (actionType, isChecked) => ({
  type: actionType,
  payload: isChecked,
});
