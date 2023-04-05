// models
import LabelForm from "@/models/LabelForm";
import LabelList from "@/models/LabelList";
// utils
import { $, root } from "@/utils";

function renderLabelPage(labelInfoList: Label[]) {
  const labelFormModel = new LabelForm(root);
  labelFormModel.init();
  const labelList = $(".label-list");
  const labelListModel = new LabelList(labelList, labelInfoList);
  labelListModel.render();
}

export default renderLabelPage;
