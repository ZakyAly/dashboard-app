import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, type, data, height, width, color, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      dataSource={data}
      height={height}
      width={width}
      valueType="Numeric"
      lineWidth={1}
      xName="x"
      yName="yval"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : ${yval}",
        // trackLineSettings: {
        //   visible: true,
        // },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
export default SparkLine;
