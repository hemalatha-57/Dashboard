"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Header from "./Header";
import { Card } from "antd";
import CardComponent from "./CardComponent";
import { Position } from "devextreme-react/cjs/autocomplete";
import TableComponent from "@/Components/Tables/TableComponent";
import SalesTarget from "@/Components/Charts/SalesTarget";

const App = () => {
  const [content, setContent] = useState("dashboard");

  const renderContent = (content) => {
    switch (content) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <TableComponent />;
      case "settings":
        return <div>Settings Content</div>;
      case "reports":
        return <SalesTarget />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="bg-white">
      <div className="header_part w-full">
        <Header />
      </div>
      <div className=" ">
        <div className=" grid grid-cols-5 relative ">
          <div className=" col-span-1 bg-red-400 h-max sticky top-0 ">
            <Sidebar content={content} setContent={setContent} />
          </div>

          <div className=" py-[100px] col-span-4   w-full h-full">
            {renderContent(content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
