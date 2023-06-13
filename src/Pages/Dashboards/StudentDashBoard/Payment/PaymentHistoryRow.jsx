import { DateTime } from "luxon";
import React from "react";

const PaymentHistoryRow = ({ payment, idx }) => {
  function getUserTimeZone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone;
  }

  const { transactionId, date, price } = payment;
  const formattedDate = DateTime.fromISO(date).toFormat("yyyy-MM-dd");
  const formattedTime = DateTime.fromISO(date).toFormat("HH:mm:ss");

  return (
    <tr className="bg-white shadow-lg shadow-slate-800 rounded-3xl my-3">
      <th>{idx}</th>
      <td>{transactionId}</td>
      <td>
        <div className="flex flex-col space-y-1 justify-center items-center h-full text-xl">
          <span className=" mb-3">{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>
      </td>
      <td>{price}</td>
      <th className="flex flex-col justify-between items-center gap-3 h-full">
        <div className="flex justify-around w-full mt-3">
          <button className="btn rounded-full btn-md btn-accent ">
            details
          </button>
        </div>
      </th>
    </tr>
  );
};

export default PaymentHistoryRow;
