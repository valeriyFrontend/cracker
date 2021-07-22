const changeFullValue = (...data) => {
  return {
    type: "CHANGE_FULL_VALUE",
    payload: data,
  };
};

export { changeFullValue };
