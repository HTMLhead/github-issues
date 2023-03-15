import { getIssueInfoList } from "../apis/getIssueInfoList";
import { renderIssueList } from "../render";

const addIssueStatusBtnEvent = (
  targetEle: Element,
  otherEle: Element,
  containerEle: Element,
  status: string
) => {
  targetEle?.addEventListener("click", async () => {
    const issueInfoList = await getIssueInfoList();
    targetEle.classList.add("font-bold");
    otherEle.classList.remove("font-bold");
    await renderIssueList(issueInfoList, status, containerEle);
  });
};

export { addIssueStatusBtnEvent };
