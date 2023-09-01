import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Trans from "../Icons/trans.png";

import { getReportsAtom, toggleChangeAtom } from "../../Recoil/RecoilState";

import { useRecoilState, useRecoilValue } from "recoil";

import { getReports } from "../../Assets/services/BankService";

import ViewReport from "../Support/ViewReport";

const Reports = () => {
  const [allReports, setAllReports] = useRecoilState(getReportsAtom);

  const [clickedIndex, setClickedIndex] = useState(-1);

  const toggleChange = useRecoilValue(toggleChangeAtom);

  const handleViewClick = (index) => {
    setClickedIndex(index);
  };

  const handleCloseClick = () => {
    setClickedIndex(-1);
  };

  useEffect(() => {
    console.log(allReports);
  }, [allReports]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await getReports();

        setAllReports(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchReports();
  }, [setAllReports, toggleChange]);

  console.log(allReports);

  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      <div className="flex justify-between p-8 bg-gray-900 ">
        <div className="flex items-center">
          <div className="shadow-lg rounded-full p-2 w-12">
            <img src={Trans} alt="" />
          </div>

          <div className="ml-4 text-2xl font-semibold text-white">
            Customer Reports
          </div>
        </div>

        <div>
          <Link to="/staffdashboard">
            <button className="bg-blue-600 h-10 w-20 rounded-lg text-white">
              Back
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex bg-neutral-400 border-b-2 h-10 items-center justify-between p-6">
          <div className="w-32">Date</div>

          <div className="">TransactionID</div>

          <div className="">Account No</div>

          <div className="">Status</div>

          <div className="">Detailed</div>
        </div>

        {allReports.map((report, i) => (
          <div
            className="flex bg-white border-b-2 h-10 items-center justify-between p-8"
            key={i}
          >
            <div className="w-32 font-semibold text-neutral-600">
              {report.date}
            </div>

            <div className="font-semibold">
              {report.transactionId.toString().toUpperCase()}
            </div>

            <div className="">{report.accountNumber}</div>

            <div className="text-red-500">
              {report.status.toString().toUpperCase()}
            </div>

            <button
              className="bg-yellow-500 w-20 h-10 rounded text-white"
              onClick={() => handleViewClick(i)}
            >
              View
            </button>

            {clickedIndex === i && (
              <ViewReport
                report={report}
                data={report.additionalInfo}
                onClose={handleCloseClick}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
