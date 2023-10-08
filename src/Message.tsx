import { FunctionComponent } from "react";
import { message } from "./interface";

const Message: FunctionComponent<message> = ({ image, self, chat }) => {
  // const self = true;
  return (
    <div className="">
      {self ? (
        <div className=" shadow-[0px_0px_0px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-end gap-[0.5rem] text-white mt-4 mb-4">
          <div className="rounded-t-xl rounded-br-none rounded-bl-xl bg-royalblue flex flex-col items-center justify-center p-[0.5rem]">
            <div className="w-[15.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch relative font-medium">{chat}</div>
            </div>
          </div>
          <div className="relative w-[1.5rem] h-[1.5rem] hidden"></div>
        </div>
      ) : (
        <div className=" flex flex-row items-start justify-start gap-[0.5rem] text-dimgray-100 mt-4 mb-4">
          <div className="flex relative">
            <img
              className=" w-[1.5rem] h-[1.5rem] rounded-full "
              alt=""
              src={image}
            />
            <img
              className="flextranslate-x-0 translate-y-0 absolute bottom-0 right-0 justify-end"
              src="/src/assets/tick.svg"
              alt=""
            />
          </div>
          <div className="rounded-tl-none rounded-tr-xl rounded-b-xl bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-center p-[0.5rem]">
            <div className="w-[16.94rem] flex flex-col items-start justify-start">
              <div className="self-stretch relative">{chat}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
