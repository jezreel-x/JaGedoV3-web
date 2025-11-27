import { Plus } from "lucide-react";
import micaImg from "../assets/mutonga.jpg";


export default function ComingSoonPage() {
  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <imgName
          src={micaImg}
          alt="LNameogo"
          className="object-cover w-40 h-40 mb-8 rounded-full"
        />Name
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8 px-4 md:px-0">
          We&apos;re working hard to bring you something awesome. Stay tuned!
        </p>
      </div>
      <PlusIconPatterns />
    </div>
  );
}

function PlusIconPatterns() {
  return (
    <>
      <Plus className="absolute end-5 top-5 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <Plus className="absolute bottom-5 end-3 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <Plus className="absolute end-[20%] top-5 hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <Plus className="absolute end-[7%] top-1/3 hidden rotate-45 animate-popup text-gray-1000 [--popup-delay:100ms] lg:inline-block" />
      <Plus className="absolute bottom-[10%] end-[10%] hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:150ms] lg:inline-block" />
      <Plus className="absolute end-[20%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <Plus className="absolute end-[40%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:400ms] lg:inline-block" />
      <Plus className="absolute end-[48%] top-10 hidden animate-popup text-[10px] text-gray-1000 [--popup-delay:500ms] lg:inline-block" />
      <Plus className="absolute end-[40%] top-1/2 hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:250ms] lg:inline-block" />
      <Plus className="absolute bottom-10 end-[38%] hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
    </>
  );
}
