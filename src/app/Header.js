import {
  GlobalOutlined,
  BellOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";

const Header = () => {
  const content = (
    <div className="w-40 ">
      <ul>
        <li className="flex  py-2 ">
          <p className="text-lg	flex-inline ps-2"> user</p>
        </li>
        <li className="flex  py-2 ">
          <p className="text-lg	flex-inline ps-2"> Logout</p>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="flex items-center justify-between h-[80px] shadow-sm px-[20px] bg-white  drop-shadow-sm w-[full] fixed z-10 top-0 right-0 left-0 ">
      <div className="flex items-center rounded-[5px] w-[800px]">
        <b className=" h-[30px] px-[14px] flex  items-center  rounded-tr-[5px] rounded-br-[5px] text-black">
          Dashboard
        </b>
      </div>
      <div className=" flex items-center gap-2">
        <BellOutlined style={{ fontSize: "140%",  }} />

        <Popover content={content} trigger="click" placement="bottom">
          <UserOutlined style={{ fontSize: "180%", }} />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
