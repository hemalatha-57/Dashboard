"use client"
import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import { TopSellingData } from './TopSellingData';
import '@/styles/global.css'; // Import the CSS file

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

function TopSellingPieChart() {
  return (
    <div>
      <PieChart
        id="pie"
        palette="Bright"
        dataSource={TopSellingData}
        title="Olympic Medals in 2008"
        className="top-chart-container"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4}
        />
        {/* <Export enabled={true} /> */}
        <Series
          argumentField="country"
          valueField="medals"
        >
          <Label
            position="columns"
            customizeText={customizeText}
          >
            <Font size={24} />
            <Connector
              visible={true}
              width={0.5}
            />
          </Label>
        </Series>
      </PieChart>
    </div>
  );
}

export default TopSellingPieChart;
