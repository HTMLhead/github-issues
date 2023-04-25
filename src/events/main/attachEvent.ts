// render
import { renderIssuePage, renderLabelPage } from "@/render";
// template
import { getLabelTpl } from "@/tpl";
// uitils
import { $ } from "@/utils";

async function attachEvent() {
  const issuePageBtn = $(".issue-page-btn");
  const labelPageBtn = $(".label-page-btn");

  issuePageBtn?.addEventListener("click", async () => renderIssuePage());
  labelPageBtn?.addEventListener("click", async () => renderLabelPage());
}

export default attachEvent;
