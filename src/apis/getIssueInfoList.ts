const getIssueInfoList = async () => {
  const response = await fetch("./data-sources/issues.json", { method: "GET" });
  const issueInfoList = await response.json();
  return issueInfoList;
};

export { getIssueInfoList };
