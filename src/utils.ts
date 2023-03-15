const $ = (selector: string) => document.querySelector(selector);

const $$ = (selector: string) => document.querySelectorAll(selector);

const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, nextFn) => nextFn(arg), args);

export { $, $$, pipe };
