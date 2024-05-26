"use client"

import React from 'react';
import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  SmallValuesGrouping,
  Connector,
} from 'devextreme-react/pie-chart';
import { internetLanguages } from './CustomerData';
import '@/styles/global.css'; // Import the CSS file

function customizeLabel(point) {
  return `${point.argumentText}: ${point.valueText}%`;
}

function Customer() {
  return (
    <PieChart
      id="pie"
      type="doughnut"
      title="Top Internet Languages"
      palette="Soft Pastel"
      dataSource={internetLanguages}
      className="pie-chart-container"
    >
      <Series
        argumentField="language"
        valueField="percent"
      >
        <SmallValuesGrouping
          mode="topN"
          topCount={3}
        />
        <Label
          visible={true}
          format="fixedPoint"
          customizeText={customizeLabel}
        >
          <Connector
            visible={true}
            width={1}
          />
        </Label>
      </Series>
      <Export enabled={true} />
      <Legend
        horizontalAlignment="center"
        verticalAlignment="bottom"
      />
    </PieChart>
  );
}

export default Customer;
