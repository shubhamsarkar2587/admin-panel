import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeatureInfo = () => {
  return (
    <div className="featureInfo w-full flex justify-between">

      <div className="featureItem mx-5 p-7 w-1/3 rounder-[10px] cursor-pointer">
        <span className="text-xl">Revenue</span>
        <div className="flex items-center my-2.5">
          <span className="text-3xl font-semibold">$3.45</span>
          <span className="flex items-center ml-5">
            9
            <ArrowUpward className="arrow_up ml-1.5" />
          </span>
        </div>
        <span className="text-base text-gray-500">compared to last month</span>
      </div>

      <div className="featureItem mx-5 p-7 w-1/3 rounder-[10px] cursor-pointer">
        <span className="text-xl">Sales</span>
        <div className="flex items-center my-2.5">
          <span className="text-3xl font-semibold">$3.45</span>
          <span className="flex items-center ml-5">
            -11
            <ArrowDownward className="arrow_down ml-1.5" />
          </span>
        </div>
        <span className="text-base text-gray-500">compared to last month</span>
      </div>

      <div className="featureItem mx-5 p-7 w-1/3 rounder-[10px] cursor-pointer">
        <span className="text-xl">Cost</span>
        <div className="flex items-center my-2.5">
          <span className="text-3xl font-semibold">$3.45</span>
          <span className="flex items-center ml-5">
            -11
            <ArrowDownward className="arrow_down ml-1.5" />
          </span>
        </div>
        <span className="text-base text-gray-500">compared to last month</span>
      </div>

    </div>
  )
}

export default FeatureInfo;
