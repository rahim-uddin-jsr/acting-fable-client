import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/payments/${user.email}?isPayments=true`)
      .then((res) => setPayments(res.data));
  }, []);
  const total = payments.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <div className="flex justify-between w-full my-3">
        <h3 className="text-3xl text-left">Transitions</h3>
        <h3 className="text-3xl text-right">Total Ballance: ${total}</h3>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-700 text-white">
            <tr className="text-center text-xl">
              <th>#</th>
              <th>Transition Id</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <PaymentHistoryRow key={idx} payment={payment} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
