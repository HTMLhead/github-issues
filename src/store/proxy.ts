import { renderIssuePage, renderLabelPage } from "@/render";

export interface Store {
  issueList: Issue[];
  labelList: Label[];
}

const store: Store = { issueList: [], labelList: [] };

const proxyHandler = {
  get: (target: Store, key: "issueList" | "labelList") => {
    return target[key];
  },
  set: (target: Store, key: "issueList" | "labelList", value: Issue[] | Label[]) => {
    if (key === "issueList") {
      renderIssuePage(value as Issue[]);
      return Reflect.set(target, key, value);
    }
    if (key === "labelList") {
      renderLabelPage(value as Label[]);
      return Reflect.set(target, key, value);
    }
    return false;
  },
};

const proxy = new Proxy(store, proxyHandler);

export default proxy;
