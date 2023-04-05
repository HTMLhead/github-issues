// event
import { attachEvent } from "@/events/issue";
// render
import { renderIssueList } from ".";
// helper
import { checkIssueState } from "@/helper/issue";
// template
import { getIssueTpl } from "@/tpl";
// utils
import { $, root } from "@/utils";

function renderIssuePage(issueInfoList: Issue[]) {
  const openIssue = issueInfoList.filter(checkIssueState("open"));
  const closedIssue = issueInfoList.filter(checkIssueState("close"));

  if (root) root.innerHTML = getIssueTpl({ open: openIssue.length, closed: closedIssue.length });
  const issueListContainer = $(".issue-list > ul") as Element;

  renderIssueList(issueInfoList, "open", issueListContainer);
  attachEvent(issueListContainer);
}

export default renderIssuePage;
