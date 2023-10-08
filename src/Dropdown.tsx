const Dropdown = () => {
  return (
    <div className="absolute top-[9.56rem] left-[12.69rem] rounded-lg shadow-[0px_4px_8px_rgba(0,_0,_0,_0.12)] w-[9.75rem] flex flex-col items-start justify-start">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-white box-border h-[3rem] flex flex-row items-center justify-start py-[0.44rem] px-[0.75rem] gap-[0.75rem] border-[1px] border-solid border-gainsboro">
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
          alt=""
          src="/src/assets/member.svg"
        />
        <div className="relative font-semibold">Members</div>
      </div>
      <div className="self-stretch bg-white box-border h-[3rem] flex flex-row items-center justify-start py-[0.44rem] px-[0.75rem] gap-[0.75rem] border-r-[1px] border-solid border-gainsboro border-b-[1px] border-l-[1px]">
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
          alt=""
          src="/src/assets/number.svg"
        />
        <div className="relative font-semibold">Share Number</div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-lg bg-white box-border h-[3rem] flex flex-row items-center justify-start py-[0.44rem] px-[0.75rem] gap-[0.75rem] border-r-[1px] border-solid border-gainsboro border-b-[1px] border-l-[1px]">
        <img
          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
          alt=""
          src="/src/assets/report.svg"
        />
        <div className="relative font-semibold">Report</div>
      </div>
    </div>
  );
};

export default Dropdown;
