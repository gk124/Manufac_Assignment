import React, { useState } from "react";
import { MantineProvider, Container } from "@mantine/core";
import CropTable1 from "./components/table1.jsx";
import CropTable2 from "./components/table2.jsx";
import { data1, data2 } from "./components/Data.js";
import "./components/table_style.css";

function App() {
  const [table, setTable] = useState("table1");

  const handleTable1Click = () => {
    setTable("table1");
  };

  const handleTable2Click = () => {
    setTable("table2");
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <div className="main">
          <h1 onClick={handleTable1Click}><u>Table1</u></h1>
          <h1 onClick={handleTable2Click}><u>Table2</u></h1>
        </div>
        <div className="tables">
          {table === "table1" ? (
            <div className="table1">
              <CropTable1 data={data1} />
            </div>
          ) : (
            <div className="table2">
              <CropTable2 data={data2} />
            </div>
          )}
        </div>
      </Container>
    </MantineProvider>
  );
}

export default App;
