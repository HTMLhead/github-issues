// tpl
import { getLabelItemTpl } from "../tpl";
// helper
import { getCloseIssueList, getOpenIssueList } from "../helper/issue";
// util
import { pipe } from "../utils";

const makeIssueTplList = (labelList: Label[]) =>
  labelList.map((issue: Label) => getLabelItemTpl(issue));

const combineIssueTplList = (labelTplList: string[]) =>
  labelTplList.reduce((bef: string, cur: string) => (bef += cur), "");

async function renderLabelList(labelInfoList: Label[], ele: Element) {
  const labelTpl = pipe(makeIssueTplList, combineIssueTplList)(labelInfoList);

  if (ele) ele.innerHTML = labelTpl;
}

export default renderLabelList;
