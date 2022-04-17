import React from "react";
import * as XLSX from "xlsx";

export default function App( props) {
  const onChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      props.action(XLSX.utils.sheet_to_json(ws));
    };
    reader.readAsBinaryString(file);
  };
  return (
    <div>
      <input type="file" name="Upload" onChange={onChange} />
    </div>
  );
}
