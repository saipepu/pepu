import Link from "next/link";

const Th_JudgeHub = () => {
  return (
    <div className="w-full text-black flex flex-col justify-start items-center px-[10px] py-[24px]">
      <div className="w-full flex flex-col justify-start items-start">
        <p className="text-[14px] font-[600]">01</p>
        <h2 className="text-[24px] font-[600]">JudgeHub</h2>
      </div>
      <div className="flex-1 w-full h-full flex flex-row justify-start items-start gap-[10px]">
        <p className="flex-1 text-[14px] font-[300]">UI, UX, Fronted, Backend </p>
        <div className="h-full flex-1 flex flex-col justify-between items-start">
          <p className="text-[14px] font-[300]">JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.</p>
          <Link href="/projects" className="underline">View Detail</Link>
        </div>
      </div>
    </div>
  );
}
 
export default Th_JudgeHub;