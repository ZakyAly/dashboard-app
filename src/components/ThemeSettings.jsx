import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummyData";

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 ">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full "
            style={{
              color: "rgb(153, 171, 180)",
              //  borderRadius: "50%"
            }}
            onClick={() => {}}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className="font-semibold text-lg">Themes</p>
          <div className="mt-4">
            <input
              className="cursor-pointer"
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={() => {}}
              checked={true}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="light">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              className="cursor-pointer"
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={() => {}}
              checked={true}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
