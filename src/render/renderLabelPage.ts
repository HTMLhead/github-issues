// api
import { getLabelInfoList } from "@/apis/getLabelInfoList";
// event
import { attachEvent } from "@/events/issue";
// render
import { renderIssueList } from "@/render";
// helper
import { checkIssueState } from "@/helper/issue";
// template
import { getLabelTpl } from "@/tpl";
// utils
import { $, root } from "@/utils";

async function renderIssuePage() {
  const issueInfoList = await getLabelInfoList();

  if (root) root.innerHTML = getLabelTpl();
}

export default renderIssuePage;
