import React from "react";
import {
  ChartComponent,
  //   SeriesCollecttionDirective,
  //   SeriesDirective,
  //   Inject,
  //   Legend,
  //   Category,
  //   StackingColumnSeries,
  //   Tooltip,
} from "@syncfusion/ej2-react-charts";
// import { useStateContext } from "../../contexts/ContextProvider";

import {
  //   stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummyData";

const Stacked = ({ width, height }) => {
  //   const { state } = useStateContext();
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      //   backgroun={currentMode === }
      legendSettings={{ background: "white" }}
    ></ChartComponent>
  );
};

export default Stacked;
