import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

monaco.editor.create(document.getElementById("app"), {
  value: `const foo = () => 0;`,
  language: "javascript",
  theme: "vs-dark",
});
