"use client"
import '@/styles/global.css';
import PieChart, {
  Connector,
  Label,
  Legend,
  Series,
  SmallValuesGrouping,
} from 'devextreme-react/pie-chart';
import React from 'react';
import { dataSource } from './SalesTargetData';

function formatLabel(arg) {
  return `${arg.argumentText}: ${arg.valueText}%`;
}

function SalesTarget() {
  return (
    <PieChart
      id="pie"
      dataSource={dataSource}
      palette="Bright"
      title="Top internet languages"
      className="pie-chart-container"
    >
      <Series
        argumentField="language"
        valueField="percent"
      >
        <Label
          visible={true}
          customizeText={formatLabel}
          format="fixedPoint"
        >
          <Connector
            visible={true}
            width={0.5}
          />
        </Label>
        <SmallValuesGrouping
          threshold={4.5}
          mode="smallValueThreshold"
        />
      </Series>
      <Legend
        horizontalAlignment="center"
        verticalAlignment="bottom"
      />
      {/* <Export enabled={true} /> */}
    </PieChart>
  );
}

export default SalesTarget;
