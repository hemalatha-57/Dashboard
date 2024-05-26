
import { GlobalOutlined,BellOutlined,FullscreenExitOutlined,SettingOutlined,UserOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";

const Header  = () => {
    const content = (
        <div className="w-40 ">
            <ul>
          <li className="flex  py-2 ">
            <p className="text-lg	flex-inline ps-2"> user
            </p>

          </li>
            <li className="flex  py-2 ">
            <p className="text-lg	flex-inline ps-2"> Logout
            </p>

          </li>
          </ul>
        </div>
      );
  return (

      <div className="flex items-center justify-between h-[80px] shadow-sm px-[20px] bg-white  drop-shadow-sm w-[full] fixed z-10 ">
        <div className="flex items-center rounded-[5px] w-[800px]">


            <b className=" h-[30px] px-[14px] flex  items-center  rounded-tr-[5px] rounded-br-[5px] text-black">Dashboard</b>
        </div>

        <div className=" w-[250px] rounded ">
          <div className="flex items-center justify-between  cursor-pointer">

          <BellOutlined style={{ fontSize: "140%", marginLeft:200 }} />

          </div>
        </div>
        <div className=" w-[320px] rounded px-12">

          <div className="flex items-center justify-between  cursor-pointer">
          <Popover content={content}  trigger="click" placement="bottom">

          <UserOutlined style={{ fontSize: "180%",marginLeft:150 }}  />

</Popover>

          </div>
        </div>
      </div>

  );
};

export default Header;
