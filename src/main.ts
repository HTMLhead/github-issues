import { proxy } from "@/store";
// apis
import { getIssueInfoList } from "@/apis/getIssueInfoList";
import { getLabelInfoList } from "@/apis/getLabelInfoList";
// events
import { attachEvent } from "@/events/main";

async function init() {
  const issueInfoList = await getIssueInfoList();
  const labelInfoList = await getLabelInfoList();

  proxy.labelList = labelInfoList;
  proxy.issueList = issueInfoList;

  attachEvent();
}

init();
