"use client"
import React from 'react';
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  ValueAxis,
  Title,
  Export,
  Tooltip,
  Border,
  ZoomAndPan,
} from 'devextreme-react/chart';
import service from './SalesPurchasesData';
import '@/styles/global.css';

const dataSource = service.getMaleAgeData();
function customizeItems(items) {
  const sortedItems = [];
  items.forEach((item) => {
    const startIndex = item.series.stack === 'male' ? 0 : 3;
    sortedItems.splice(startIndex, 0, item);
  });
  return sortedItems;
}
function SalesPurchasesChart() {
  return (
  <div style={{padding: '5vw'}}>
    <Chart
      id="chart"
      title="Population: Age Structure"
      dataSource={dataSource}
      className="chart-container"
      >
        <ZoomAndPan
                    argumentAxis="both"
                    valueAxis="both"
                />
      <CommonSeriesSettings
        argumentField="state"
        type="stackedbar"
      />
      <Series
        valueField="maleyoung"
        name="Sales"
        stack="male"
        color="blue"
      />
      <Series
        valueField="femaleyoung"
        name="Purchases"
        stack="female"
        color="#BBBCF1"
      />
      <ValueAxis>
        <Title text="Populations, millions" />
      </ValueAxis>
      <Legend
        position="inside"
        columnCount={2}
        customizeItems={customizeItems}
        horizontalAlignment="right"
      >
        <Border visible={true} />
      </Legend>
      {/* <Export enabled={true} /> */}
      <Tooltip enabled={true} />
    </Chart>
    </div>
  );
}

export default SalesPurchasesChart;
