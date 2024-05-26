import '@/styles/global.css'; // Import the CSS file
import { Height, Width } from 'devextreme-react/cjs/chart';
import React from 'react';
import Customer from '../Components/Charts/Customer';
import SalesPurchasesChart from '../Components/Charts/SalesPurchasesChart';
import SalesTarget from '../Components/Charts/SalesTarget';
import StockTable from '../Components/Charts/StockTable';
import TopSellingPieChart from '../Components/Charts/TopSellingPieChart';
import CardComponent from './CardComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container p-4">
      <CardComponent />
      <div className=' grid lg:grid-cols-2 grid-cols-1' >
        <div  className=' col-span-1'  >
          <TopSellingPieChart className="flex-item" />
          </div>

        <div  className=' col-span-1'  >
          <Customer className="flex-item" />
          </div>

      </div>

       <SalesPurchasesChart />
      <div style={{display:'flex', paddingTop:'50px'}} >
        {/* <StockTable  className="flex-item" /> */}

      </div>
      <div style={{display:'flex', paddingTop:'50px'}} className="padding-top-8 flex-container">
        {/* <SalesTarget className="flex-item" /> */}
        {/* <Customer className="flex-item" /> */}
      </div>
    </div>
  );
}

export default Dashboard;
