import { PercentageOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";

const CardComponent = () => {
  return (
   <div className="space-y-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="h-36 p-4 border border-slate-900 flex justify-between items-center">
          <PercentageOutlined className="text-4xl text-indigo-500" />
          <div className="text-right">
            <div className="text-gray-600">SALES</div>
            <div className="text-2xl text-black">$5312.00</div>
          </div>
        </div>
        <div className="h-36 p-4 border border-slate-900 flex justify-between items-center">
          <PercentageOutlined className="text-4xl text-indigo-500" />
          <div className="text-right">
            <div className="text-gray-600">PURCHASES</div>
            <div className="text-2xl text-black">$5312.00</div>
          </div>
        </div>
         <div className="h-36 p-4 border border-slate-900 flex justify-between items-center">
          <DollarCircleOutlined className="text-4xl text-indigo-500" />
          <div className="text-right">
            <div className="text-gray-600">SALES RETURN</div>
            <div className="text-2xl text-black">$5312.00</div>
          </div>
        </div>
        <div className="h-36 p-4 border border-slate-900 flex justify-between items-center">
          <PercentageOutlined className="text-4xl text-indigo-500" />
          <div className="text-right">
            <div className="text-gray-600">PURCHASES RETURN</div>
            <div className="text-2xl text-black">$5312.00</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardComponent;
