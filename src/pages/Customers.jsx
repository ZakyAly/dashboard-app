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
  const services = [Sort, Filter, Page, Edit, Search, Toolbar];
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
  };
  return (
    <div className="mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Add", "Edit", "Delete"]}
        width="auto"
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={services} />
      </GridComponent>
    </div>
  );
};

export default Customers;
