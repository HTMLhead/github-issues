// tpl
import { getLabelItemTpl } from "../tpl";
// helper
import { getCloseIssueList, getOpenIssueList } from "../helper/issue";
// util
import { pipe } from "../utils";

// const makeIssueTplList = (issueList: Issue[]) =>
//   issueList.map((issue: Issue) => getLabelItemTpl(issue));

// const combineIssueTplList = (issueTplList: string[]) =>
//   issueTplList.reduce((bef: string, cur: string) => (bef += cur), "");

// async function renderIssueList(issueInfoList: Issue[], status: string, ele: Element) {
//   const getIssueListByStatus = status === "open" ? getOpenIssueList : getCloseIssueList;
//   const issueTpl = pipe(getIssueListByStatus, makeIssueTplList, combineIssueTplList)(issueInfoList);

//   if (ele) ele.innerHTML = issueTpl;
// }

// export default renderIssueList;
