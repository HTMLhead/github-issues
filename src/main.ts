// render
import { renderIssuePage } from "@/render";
// events
import { attachEvent } from "@/events/main";

async function init() {
  attachEvent();
  renderIssuePage();
}

init();
