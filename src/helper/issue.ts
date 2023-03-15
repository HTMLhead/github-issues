const checkIssueState = (status: string) => (issue: Issue) => issue.status === status;

const getOpenIssueList = (issueList: Issue[]) => issueList.filter(checkIssueState("open"));

const getCloseIssueList = (issueList: Issue[]) => issueList.filter(checkIssueState("close"));

export { checkIssueState, getOpenIssueList, getCloseIssueList };
