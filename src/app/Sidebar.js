"use client";

import { useState } from 'react';
import { Popover } from 'antd';
import {
  AreaChartOutlined,
  SettingOutlined,
  SlackOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import TableComponent from '@/Components/Tables/TableComponent';
import SalesTarget from '@/Components/Charts/SalesTarget';


const Sidebar = ({setContent, content}) => {


  return (
    <div className="flex w-full  h-[100vh]">
      <div className="bg-[#1E293B] w-full  pt-20 overflow-y-hidden">
        <div className="px-4 py-8 border-b border-gray-300/[0.3]">
          <div className="py-2">
            <div
              className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg "
              onClick={() => setContent('dashboard')}
            >
              <SlackOutlined style={{ fontSize: "2rem", color: "white" }} />
              <p className="text-sm leading-5 font-normal text-white">Dashboard</p>
            </div>
          </div>
          <div className="py-2">
            <Popover  trigger="hover" placement="right">
              <div
                className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg "
                onClick={() => setContent('users')}
              >
                <UsergroupAddOutlined style={{ fontSize: "2rem", color: "white" }} />
                <p className="text-sm leading-5 font-normal text-white">Users</p>
              </div>
            </Popover>
          </div>
          <div className="py-2">
            <Popover trigger="hover" placement="right">
              <div
                className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg "
                onClick={() => setContent('settings')}
              >
                <SettingOutlined style={{ fontSize: "2rem", color: "white" }} />
                <p className="text-sm leading-5 font-normal text-white">Settings</p>
              </div>
            </Popover>
          </div>
          <div className="py-2">
            <Popover  trigger="hover" placement="right">
              <div
                className="flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg "
                onClick={() => setContent('reports')}
              >
                <AreaChartOutlined style={{ fontSize: "2rem", color: "white" }} />
                <p className="text-sm leading-5 font-normal text-white">Reports</p>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
