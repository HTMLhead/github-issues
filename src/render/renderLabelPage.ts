// api
import { getLabelInfoList } from "@/apis/getLabelInfoList";
// template
import { getLabelTpl } from "@/tpl";
// utils
import { $, root } from "@/utils";
import renderLabelList from "./renderLabelList";

async function renderLabelPage() {
  const labelInfoList = await getLabelInfoList();

  if (root) root.innerHTML = getLabelTpl();
  const labelList = $(".label-list");

  renderLabelList(labelInfoList, labelList);
}

export default renderLabelPage;
