import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import {
  ordersData,
  //  contextMenuItems,
  ordersGrid,
} from "../data/dummyData";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            ExcelExport,
            PdfExport,
            ContextMenu,
            Filter,
            Edit,
            ContextMenu,
            Resize,
            Sort,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
