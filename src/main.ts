import { getIssueTpl, getLabelItemTpl, getLabelTpl } from "./tpl";
import { $ } from "./utils";

async function init() {
  const app = $("#app");
  if (app) app.innerHTML = getIssueTpl();
}

init();
