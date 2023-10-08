import React from "react";

const Options = () => {
  return (
    <div>
      <div className="absolute top-[40.75rem] left-[14.69rem] rounded-980xl bg-green shadow-[0px_-1px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] gap-[1rem]">
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 z-[0]"
          alt=""
          src="/src/assets/camera.svg"
        />
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/src/assets/video.svg"
        />
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 z-[2]"
          alt=""
          src="/src/assets//document.svg"
        />
        <img
          className="relative rounded-980xl w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden z-[3]"
          alt=""
          src="/plus.svg"
        />
        <img
          className="absolute my-0 mx-[!important] bottom-[-0.37rem] left-[calc(50%_-_2px)] w-[1rem] h-[0.5rem] z-[4]"
          alt=""
          src="/corner.svg"
        />
      </div>
    </div>
  );
};

export default Options;
