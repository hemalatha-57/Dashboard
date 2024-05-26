"use client";

import { Popover } from 'antd';
import React from "react";
import {
  AreaChartOutlined,
  BarcodeOutlined,
  FileAddOutlined,
  PercentageOutlined,
  SettingOutlined,
  SlackOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const productContent = (
  <div className="w-40">
    <ul>
      <li className="flex py-2">
        <FileAddOutlined style={{ fontSize: "120%" }} className="flex-inline" />
        <p className="text-lg flex-inline ps-2">Create Product</p>
      </li>
      <li className="flex">
        <UnorderedListOutlined style={{ fontSize: "120%" }} className="flex-inline" />
        <p className="text-lg flex-inline ps-2">Product List</p>
      </li>
      <li className="py-2 flex">
        <BarcodeOutlined style={{ fontSize: "120%" }} className="flex-inline" />
        <p className="text-lg flex-inline ps-2">Print Barcode</p>
      </li>
    </ul>
  </div>
);

const userContent = (
  <div className="w-40">
    <ul>
      <li className="flex py-2">
        <Link href="/table" passHref>
          <FileAddOutlined style={{ fontSize: "120%" }} />
          <p className="text-lg ps-2"> User</p>
        </Link>
      </li>
  
    </ul>
  </div>
);

const reportContent = (
  <div className="w-40">
    <ul>
      <li className="flex py-2">
         <Link href="/reports" passHref>
        <AreaChartOutlined style={{ fontSize: "120%" }} className="flex-inline" />
          <p className="text-lg flex-inline ps-2">Sales Report</p>
          </Link>
      </li>

    </ul>
  </div>
);

const Sidebar = () => {
  return (
    <div className="bg-[#1E293B] fixed h-screen w-[190px] pt-20 overflow-y-hidden">
      <div className="px-4 py-8 border-b border-gray-300/[0.3]">
        <div className="py-2">
          <div className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg w-[150px]">
            <SlackOutlined style={{ fontSize: "2rem", color: "white" }} />
            <p className="text-sm leading-5 font-normal text-white">Dashboard</p>
          </div>
        </div>
        <div className="py-2">
          <Popover content={userContent} trigger="hover" placement="right">
            <div className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg w-[150px]">
              <UsergroupAddOutlined style={{ fontSize: "2rem", color: "white" }} />
              <p className="text-sm leading-5 font-normal text-white">Users</p>
            </div>
          </Popover>
        </div>
        <div className="py-2">
          <Popover  trigger="hover" placement="right">
            <div className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg w-[150px]">
              <SettingOutlined style={{ fontSize: "2rem", color: "white" }} />
              <p className="text-sm leading-5 font-normal text-white">Settings</p>
            </div>
          </Popover>
        </div>
        <div className="py-2">
          <Popover content={reportContent} trigger="hover" placement="right">
            <div className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg w-[150px]">
              <AreaChartOutlined style={{ fontSize: "2rem", color: "white" }} />
              <p className="text-sm leading-5 font-normal text-white">Reports</p>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
