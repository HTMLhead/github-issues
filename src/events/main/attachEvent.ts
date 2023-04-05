import { proxy } from "@/store";
// render
import { getIssueInfoList } from "@/apis/getIssueInfoList";
import { getLabelInfoList } from "@/apis/getLabelInfoList";
// uitils
import { $ } from "@/utils";

async function attachEvent() {
  const issuePageBtn = $(".issue-page-btn");
  const labelPageBtn = $(".label-page-btn");

  const issueListInfo = await getIssueInfoList();
  const labelListInfo = await getLabelInfoList();

  issuePageBtn?.addEventListener("click", () => (proxy.issueList = issueListInfo));
  labelPageBtn?.addEventListener("click", () => (proxy.labelList = labelListInfo));
}

export default attachEvent;
