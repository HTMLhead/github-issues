const $ = (selector: string) => document.querySelector(selector);

const $$ = (selector: string) => document.querySelectorAll(selector);

const pipe =
  (...functions: any[]) =>
  (args: any[]) =>
    functions.reduce((arg, nextFn) => nextFn(arg), args);

const root = $("#app");

export { $, $$, pipe, root };
