import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatSquare } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="#3EBDFF"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Notification"
          // dotColor="#8CFFE9"
          customFunc={() => handleClick("notification")}
          color="#3EBDFF"
          icon={<RiNotification2Line />}
        />
        <NavButton
          title="Chat"
          // dotColor="#3EBDFF"
          customFunc={() => handleClick("chat")}
          color="#3EBDFF"
          icon={<BsChatSquare />}
        />
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="#3EBDFF"
          icon={<FiShoppingCart />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {""}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Murad
              </span>
            </p>
            <MdKeyboardArrowDown
              className="text-gray-400 text-14"
              color="#3EBDFF"
            />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
