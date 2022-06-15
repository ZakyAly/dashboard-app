import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummyData";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Add", "Edit", "Delete"]}
        width="auto"
        editSettings={{
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Filter, Edit, Sort, Search, Toolbar, Selection]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
