import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  //   Resize,
  Sort,
  //   ContextMenu,
  //   Filter,
  Page,
  //   ExcelExport,
  //   PdfExport,
  //   Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummyData";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            // ExcelExport,
            // PdfExport,
            // ContextMenu,
            // Filter,
            // Edit,
            // ContextMenu,
            // Resize,
            Sort,
            Search,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
