const getLabelInfoList = async () => {
  const response = await fetch("./data-sources/labels.json", { method: "GET" });
  const labelInfoList = await response.json();
  return labelInfoList;
};

export { getLabelInfoList };
