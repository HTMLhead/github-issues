import { getIssueInfoList } from "./apis/getIssueInfoList";
import { checkIssueState } from "./helper/issue";
import { renderIssueList } from "./render";
import { getIssueTpl } from "./tpl";
import { $, pipe } from "./utils";

async function init() {
  const issueInfoList = await getIssueInfoList();

  const openIssue = issueInfoList.filter(checkIssueState("open"));
  const closedIssue = issueInfoList.filter(checkIssueState("close"));

  const app = $("#app");
  if (app) app.innerHTML = getIssueTpl({ open: openIssue.length, closed: closedIssue.length });
  const issueListContainer = $(".issue-list > ul") as Element;

  await renderIssueList(issueInfoList, "open", issueListContainer);
  await attachEvent(issueListContainer);
}

async function attachEvent(ele: Element) {
  const openBtn = $(".open-count");
  const closeBtn = $(".close-count");

  openBtn?.addEventListener("click", async () => {
    const issueInfoList = await getIssueInfoList();
    openBtn.classList.add("font-bold");
    closeBtn?.classList.remove("font-bold");
    await renderIssueList(issueInfoList, "open", ele);
  });
  closeBtn?.addEventListener("click", async () => {
    const issueInfoList = await getIssueInfoList();
    closeBtn.classList.add("font-bold");
    openBtn?.classList.remove("font-bold");
    await renderIssueList(issueInfoList, "close", ele);
  });
}

init();
