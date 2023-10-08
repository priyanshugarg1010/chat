/* eslint-disable @typescript-eslint/no-unused-vars */
import { FunctionComponent, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Options from "./Options";
import Message from "./Message";
import axios from "axios";
import { chatData } from "./interface";

const ChatScreenInside: FunctionComponent = () => {
  const [toggleDot, setToggleDot] = useState<boolean>(false);
  const [toggleLink, setToggleLink] = useState<boolean>(false);
  const [data, setData] = useState<chatData | null>(null);

  const fetchData = () => {
    try {
      axios.get("https://qa.corider.in/assignment/chat?page=0").then((res) => {
        const data: chatData = res.data;
        setData(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="flex justify-center items-center flex-col w-[375px] sm:w-full">
      <div className="relative rounded-[32px] bg-whitesmoke-100 w-[375px] sm:w-full xl:w-[375px] h-[50.75rem] overflow-hidden text-left text-[0.88rem] text-gray-200 font-mulish">
        <div className="absolute w-full top-[calc(50%_-_406px)] right-[0%] left-[0%] bg-whitesmoke-100 flex flex-row items-center justify-between pt-[0.88rem] pb-[0.75rem] pr-[1.63rem] pl-[1.69rem] box-border text-center text-[1.06rem] text-system-colours-default-colors-systemwhiteblack-dark font-body-regular">
          <div className="relative w-[3.38rem] h-[1.31rem] z-[0]">
            <div className="absolute top-[calc(50%_-_10.5px)] left-[0rem] tracking-[-0.41px] leading-[1.38rem] font-semibold inline-block w-[3.38rem]">
              9:41
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img
              className="relative  h-[0.81rem] z-[1]"
              alt=""
              src="src/assets/signal.svg"
            />
            <img
              className="relative h-[0.81rem] z-[1]"
              alt=""
              src="src/assets/wifi.svg"
            />
            <img
              className="relative h-[0.81rem] z-[1]"
              alt=""
              src="src/assets/battery.svg"
            />
          </div>
        </div>

        <div className="absolute top-[2.94rem] left-[0rem] flex flex-col items-start justify-start pt-[1.25rem] px-[1rem] pb-[1rem] gap-[1rem] text-[1.5rem] border-b-[1px] border-solid border-gainsboro">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/src/assets/back.svg"
            />
            <b className="flex-1 relative">{data?.name}</b>
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/src/assets/edit.svg"
            />
          </div>
          <div className="w-[21.44rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1.13rem]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1rem]">
              <div className="relative w-[3rem] h-[3rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[48px] bg-white box-border w-[3rem] h-[3rem] overflow-hidden border-[1px] border-solid border-white">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[1.63rem] h-[1.63rem] object-cover"
                    alt=""
                    src={data?.chats[0].sender.image}
                  />
                  <img
                    className="absolute top-[1.38rem] left-[0rem] w-[1.63rem] h-[1.63rem] object-cover"
                    alt=""
                    src={data?.chats[1].sender.image}
                  />
                  <img
                    className="absolute top-[0rem] left-[1.5rem] w-[1.63rem] h-[1.63rem] object-cover"
                    alt=""
                    src={data?.chats[2].sender.image}
                  />
                  <img
                    className="absolute top-[1.38rem] left-[1.5rem] w-[1.63rem] h-[1.63rem] object-cover"
                    alt=""
                    src={data?.chats[3].sender.image}
                  />
                </div>
              </div>
              <div className="relative whitespace-pre-wrap inline-block w-[13.44rem] shrink-0">
                <p className="m-0">
                  <span className="text-[1rem] font-medium font-mulish text-dimgray-100">
                    From
                  </span>
                  <span>
                    <span className="font-semibold font-mulish">{` `}</span>
                    <b>{data?.from}</b>
                  </span>
                </p>
                <p className="m-0">
                  <span className="text-[1rem] font-medium font-mulish text-dimgray-100">
                    To
                  </span>
                  <span>
                    <span className="font-semibold font-mulish">{`  `}</span>
                    <b>{data?.to}</b>
                  </span>
                </p>
              </div>
            </div>

            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/src/assets/dot.svg"
              onClick={() => setToggleDot(!toggleDot)}
            />
          </div>
        </div>

        <div className="absolute h-[520px] w-[375px] overflow-y-scroll  top-[180px] ">
          <div className="flex flex-nowrap flex-col items-center m-2 text-black h-[515px] ">
            <div className="absolute mt-5 text-silver">
              <hr className="absolute w-[116px]  border-gray-300 top-1/2 transform -translate-y-1/2 left-[-131px] before:block content-['']" />
              <span>{data?.chats[0].time.split(" ")[0]}</span>
              <hr className="absolute w-[116px]  border-gray-300 top-1/2 transform -translate-y-1/2 right-[-130px] after:block content-['']" />
            </div>
            <div className="mt-12 w-[21rem]">
              {data?.chats.map((chat) => (
                <Message
                  image={chat.sender.image}
                  chat={chat.message}
                  self={chat.sender.self}
                  key={chat.id}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <Dropdown />  add the on click property to it*/}
        {toggleDot && <Dropdown />}
        <div className="absolute top-[43.5rem] left-[0rem] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.5rem]">
          <div className="bg-whitesmoke-100 w-[23.44rem] flex flex-row items-center justify-end py-[0.5rem] px-[1rem] box-border">
            <div className="flex-1 rounded-lg bg-white flex flex-row items-center justify-start py-[0.69rem] px-[0.75rem] gap-[1rem]">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="relative text-silver">
                  Reply to @Rohit Yadav
                </div>
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/src/assets/link.svg"
                onClick={() => setToggleLink(!toggleLink)}
              />
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/src/assets/send.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0.63rem] left-[calc(50%_-_66.5px)] rounded-81xl bg-system-colours-default-colors-systemwhiteblack-dark w-[8.38rem] h-[0.31rem]" />

        {/* <Options />  addt the optins tab */}
        {toggleLink && <Options />}
      </div>
    </div>
  );
};

export default ChatScreenInside;
