import React, { useEffect, useState } from "react";

import { putReport } from "../../Assets/services/BankService";

import {  useSetRecoilState } from "recoil";

import { toggleChangeAtom} from "../../Recoil/RecoilState";

const ViewReport = ({ report, data, onClose }) => {
  const [comment, setComment] = useState("");

  const [status, setStatus] = useState(null); //just for UI

  const setToggleChange = useSetRecoilState(toggleChangeAtom);

  async function fn(newReport) {
    try {
      const done = await putReport(report.id, newReport);

      if (done) setToggleChange((p) => p + 1);
    } catch (err) {
      console.error(err);
    }
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

    const newReport = JSON.parse(JSON.stringify(report));

    newReport.status = newStatus;

    newReport.comments = comment;

    fn(newReport);

    onClose();
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    setComment(report.comments);
  }, [report.comments]);

  return (
    <div className="absolute h-[350px] justify-between bg-gray-100 rounded-xl shadow-xl w-[500px] left-96  flex flex-col items-center p-10">
      <div className="text-xl font-semibold mt-10">
        Details: <span className="text-slate-700 text-sm">{data}</span>
      </div>

      <div className="absolute top-0 right-0 p-8">
        <button className="bg-red-500 h-8 w-14 rounded-full" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row mt-4">
          <button
            className={`bg-blue-500 h-8 w-24 rounded-md mr-4 ${
              status === "in-progress" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleStatusChange("inprogress")}
          >
            In Progress
          </button>

          <button
            className={`bg-green-500 h-8 w-24 rounded-md ${
              status === "finished" ? "bg-green-700" : ""
            }`}
            onClick={() => handleStatusChange("finished")}
          >
            Finished
          </button>
        </div>

        <div className="mt-4">
          <div className="text-base font-medium">Comments:</div>

          <textarea
            className="w-full h-20 p-2 border rounded-md"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
