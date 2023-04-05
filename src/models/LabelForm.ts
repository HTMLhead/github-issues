import type { Store } from "@/store/proxy";
import { proxy } from "@/store";
// template
import { getLabelTpl } from "@/tpl";

class LabelForm {
  target: Element;

  constructor(target: Element) {
    this.target = target;
  }

  render() {
    const labelTpl = getLabelTpl();
    this.target.innerHTML = labelTpl;
  }

  attachEvent() {
    const newLabelBtn = this.target.querySelector(".new-label-button");
    const issueLabelForm = this.target.querySelector(".issue-label-form");
    const createLabelBtn = this.target.querySelector("#label-create-button");

    newLabelBtn?.addEventListener("click", () => {
      issueLabelForm?.classList.toggle("hidden");
    });

    createLabelBtn?.addEventListener("click", () => {
      const nameInput = this.target.querySelector("#label-name-input") as HTMLInputElement;
      const descriptionInput = this.target.querySelector(
        "#label-description-input"
      ) as HTMLInputElement;
      const colorInput = this.target.querySelector("#label-color-value") as HTMLInputElement;
      if (nameInput.value && descriptionInput.value && colorInput.value) {
        proxy.labelList = [
          ...proxy.labelList,
          { name: nameInput.value, description: descriptionInput.value, color: colorInput.value },
        ];
      }
    });
  }

  init() {
    this.render();
    this.attachEvent();
  }
}

export default LabelForm;
