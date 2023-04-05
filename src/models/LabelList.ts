// template
import { getLabelItemTpl } from "@/tpl";

class LabelList {
  target: Element;
  labelList: Label[];

  constructor(target: Element, labelList: Label[]) {
    this.labelList = labelList;
    this.target = target;
  }

  render() {
    const labelTpl = this.labelList.map((label: Label) => getLabelItemTpl(label)).join("");
    console.log(labelTpl);
    console.log(this.target);
    this.target.innerHTML = labelTpl;
  }
}

export default LabelList;
