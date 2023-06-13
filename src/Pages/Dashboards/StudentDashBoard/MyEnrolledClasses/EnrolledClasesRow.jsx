import React, { useState } from "react";
const EnrolledClasesRow = ({ classItem, idx }) => {
  const {
    _id,
    availableSeats,
    name,
    instructorEmail,
    instructorName,
    img,
    price,
  } = classItem;
  const [isDisabled, serIsDisabled] = useState(false);

  return (
    <tr className="bg-white shadow-lg shadow-slate-800 rounded-3xl my-3">
      <th>{idx}</th>
      <td>
        <div className="avatar">
          <div className="rounded-md  w-20 h-20">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{instructorName}</td>
      <td>{instructorEmail}</td>
      <td>{name}</td>
      <td>{availableSeats}</td>
      <td>{price}</td>
    </tr>
  );
};

export default EnrolledClasesRow;
