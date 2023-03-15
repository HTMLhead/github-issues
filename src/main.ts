import { getIssueInfoList } from "./apis/getIssueInfoList";
import { renderIssueList } from "./render";
// tpl
import { getIssueTpl } from "./tpl";
// helper
import { checkIssueState } from "./helper/issue";
import { addIssueStatusBtnEvent } from "./helper/attachEvent";
// utils
import { $ } from "./utils";

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

async function attachEvent(containerEle: Element) {
  const openBtn = $(".open-count") as Element;
  const closeBtn = $(".close-count") as Element;

  addIssueStatusBtnEvent(openBtn, closeBtn, containerEle, "open");
  addIssueStatusBtnEvent(closeBtn, openBtn, containerEle, "close");
}

init();
