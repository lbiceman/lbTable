import "./style.css";
import { headList } from "./headConfig";
import { dataList } from "./dataConfig";
import { CanvasTable } from "./table";

export const creatHtml = () => {
  let app = document.getElementById("app");
  app!.innerHTML = `<div class="container">
    <div class="table" id="canvasTable">
    </div>
  </div>`;
}

window.onload = function () {
  let table = new CanvasTable(document.getElementById('canvasTable'));
  table.setConfig({
    head: headList,
    data: dataList,
    height: 30,
    fontWidth: 30,
    edit: true,
    menu: [
      { label: "添加一行", type: "insertRow" },
      { label: "删除一行", type: "delRow" },
      { label: "更多", type: "more" },
    ]
  });
}