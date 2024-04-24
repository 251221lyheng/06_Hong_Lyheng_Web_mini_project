import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import React from "react";

const Workspace = () => {
  return (
    <div>
      {/* Type of Workspace */}
      <div className="w-[680px]">
         <ListBoardComponentHeader />
      </div>
      
      <div className="flex">
        {/* card of workspace */}
        <div className="w-[800px] ">
          <div className=" my-4 w-[680px] bg-yellow-300 p-4 rounded-md">
            <div className="flex gap-4">
              <div className="bg-white w-[50px] h-[50px] rounded-md  text-center">
                {/* day */}
                <h3 className="text-red-600"> Wed </h3>
                <p className="text-xl"> 17 </p>
              </div>

              {/* title */}
              <div>
                <h3 className="font-semibold"> Working On Task </h3>
                <p>
                  {" "}
                  <small> Sharing </small>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className=" bg-white px-8 py-2 rounded-lg font-semibold my-2 ">
                {" "}
                Todo{" "}
              </button>
            </div>
          </div>

          <div className="my-4 w-[680px] bg-yellow-300 p-4 rounded-md">
          <div className="flex gap-4">
            <div className="bg-white w-[50px] h-[50px] rounded-md  text-center">
              {/* day */}
              <h3 className="text-red-600"> Wed </h3>
              <p className="text-xl"> 17 </p>
            </div>

            {/* title */}
            <div>
              <h3 className="font-semibold"> Working On Task </h3>
              <p>
                {" "}
                <small> Sharing </small>
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className=" bg-white px-8 py-2 rounded-lg font-semibold my-2 ">
              {" "}
              Todo{" "}
            </button>
          </div>
        </div>

        </div>

        {/* Rate of worspace */}
        <div className="-mt-20">
           <MonthlyStatisticsComponent/>
        </div>
      </div>

    </div>
  );
};

export default Workspace;
