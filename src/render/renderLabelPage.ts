// event
import { attachEvent } from "@/events/label";
// render
import { renderLabelList } from ".";
// template
import { getLabelTpl } from "@/tpl";
// utils
import { $, root } from "@/utils";

function renderLabelPage(labelInfoList: Label[]) {
  if (root) root.innerHTML = getLabelTpl();
  const labelList = $(".label-list");

  renderLabelList(labelInfoList, labelList);
  attachEvent();
}

export default renderLabelPage;
