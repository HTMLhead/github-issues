import { addIssueStatusBtnEvent } from ".";
// utils
import { $ } from "@/utils";

async function attachEvent(containerEle: Element) {
  const openBtn = $(".open-count") as Element;
  const closeBtn = $(".close-count") as Element;

  addIssueStatusBtnEvent(openBtn, closeBtn, containerEle, "open");
  addIssueStatusBtnEvent(closeBtn, openBtn, containerEle, "close");
}

export default attachEvent;
