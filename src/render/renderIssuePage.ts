// api
import { getIssueInfoList } from "@/apis/getIssueInfoList";
// event
import { attachEvent } from "@/events/issue";
// render
import { renderIssueList } from "@/render";
// helper
import { checkIssueState } from "@/helper/issue";
// template
import { getIssueTpl } from "@/tpl";
// utils
import { $, root } from "@/utils";

async function renderIssuePage() {
  const issueInfoList = await getIssueInfoList();

  const openIssue = issueInfoList.filter(checkIssueState("open"));
  const closedIssue = issueInfoList.filter(checkIssueState("close"));

  if (root) root.innerHTML = getIssueTpl({ open: openIssue.length, closed: closedIssue.length });
  const issueListContainer = $(".issue-list > ul") as Element;

  await renderIssueList(issueInfoList, "open", issueListContainer);
  await attachEvent(issueListContainer);
}

export default renderIssuePage;
