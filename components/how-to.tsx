import { Brain, Monitor, PackageCheck, Settings } from "lucide-react";

export default function HowTo() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-[20px] text-gray-700 text-center">
        How It Works
      </h2>
      <div className="flex flex-row justify-center w-full gap-[32px] flex-wrap">
        <div className="text-center w-[250px] bg-white p-[50px] shadow-md rounded-[4px] place-items-center hover:shadow-xl">
          <p className="text-sm mt-[-40px] mb-[10px]">Step 1</p>
          <Brain className="text-center mb-[20px]" size={30} color="#374151" />
          <p className="font-bold">Train</p>
          <p>
            Upload your product information, call scripts, knowledge base and
            lead qualification criteria.
          </p>
        </div>

        <div className="text-center w-[250px] bg-white p-[50px] shadow-md rounded-[4px] place-items-center hover:shadow-xl">
          <p className="text-sm mt-[-40px] mb-[10px]">Step 2</p>
          <Settings
            className="text-center mb-[20px]"
            size={30}
            color="#374151"
          />
          <p className="font-bold">Configure</p>
          <p>Connect RingConnect with your CRM, sales tools, and calendar.</p>
        </div>

        <div className="text-center w-[250px] bg-white p-[50px] shadow-md rounded-[4px] place-items-center hover:shadow-xl">
          <p className="text-sm mt-[-40px] mb-[10px]">Step 3</p>
          <PackageCheck
            className="text-center mb-[20px]"
            size={30}
            color="#374151"
          />
          <p className="font-bold">Go Live</p>
          <p>
            Easily deploy your agents to phone calls, web calls for outreach,
            follow-ups, and conversions.
          </p>
        </div>

        <div className="text-center w-[250px] bg-white p-[50px] shadow-md rounded-[4px] place-items-center hover:shadow-xl">
          <p className="text-sm mt-[-40px] mb-[10px]">Step 4</p>
          <Monitor
            className="text-center mb-[20px]"
            size={30}
            color="#374151"
          />
          <p className="font-bold">Monitor</p>
          <p>
            Track success rates, latency, and user sentiment through call
            history dashboard. Quickly identify failed calls.
          </p>
        </div>
      </div>
    </div>
  );
}
