import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummyData";

const ThemeSettings = () => {
  const { setColor, currentColor, setMode, currentMode, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-400 ">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            className="text-2xl p-1 hover:drop-shadow-xl  rounded-full "
            style={{ backgroundColor: currentColor }}
            onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className="font-semibold text-lg">Themes</p>
          <p className="text-sm text-gray-500">Select theme</p>
          <div className="mt-4">
            <input
              className="cursor-pointer"
              type="radio"
              id="light"
              name="theme"
              value="Light"
              checked={currentMode === "Light"}
              onChange={setMode}
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
              checked={currentMode === "Dark"}
              onChange={setMode}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>

        <div className=" border-t-1 border-color ml-4 p-4">
          <p className="font-semibold text-lg">Colors</p>
          <p className="text-sm text-gray-500">Pick color</p>
          <div className="flex gap-4 mt-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className=" flex gap-5 items-center relative mt-2 cursor-pointer"
                  // key={item.name}
                >
                  <button
                    className="h-10 w-10 cursor-pointer rounded-full"
                    type="button"
                    style={{
                      backgroundColor: item.color,
                    }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
