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
 const menuItems = [
    { icon: <SlackOutlined size="2rem" style={{color: "#fff"}} />, label: 'Dashboard', content: 'dashboard' },
    { icon: <UsergroupAddOutlined size="2rem" style={{color: "#fff"}} />, label: 'Users', content: 'users' },
    { icon: <SettingOutlined size="2rem" style={{color: "#fff"}} />, label: 'Settings', content: 'settings' },
    { icon: <AreaChartOutlined size="2rem" style={{color: "#fff"}} />, label: 'Reports', content: 'reports' },
  ];

  return (
    <div className="flex w-full h-[100vh]">
      <div className="bg-[#1E293B] w-full pt-20 overflow-y-hidden">
        <div className=" md:block hidden px-4 py-8 border-b border-gray-300/[0.3] space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] pl-8 rounded-lg text-center ${content === item.content ? "bg-[#5A57EB]" : " "}`}
              onClick={() => setContent(item.content)}
            >
              {item.icon}
              <p className="text-sm font-normal text-white">{item.label}</p>
            </div>
          ))}
        </div>
        <div className=" md:hidden py-8 flex flex-col items-center justify-center border-b border-gray-300/[0.3] space-y-4 ">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-4 cursor-pointer bg-[#2C3A52] hover:bg-[#5A57EB] w-[45px] h-[45px] rounded-lg text-center"
              onClick={() => setContent(item.content)}
            >
              {item.icon}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
