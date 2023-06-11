import React, { useEffect, useState } from "react";

const ClassRow = ({ classItem, idx, handleModal, updateStatus }) => {
  const {
    _id,
    availableSeats,
    name,
    instructorEmail,
    instructorName,
    img,
    price,
    status,
  } = classItem;
  const [isDisabled, serIsDisabled] = useState(false);

  useEffect(() => {
    if (status === "denied") {
      serIsDisabled(true);
    }
    if (status !== "denied") {
      serIsDisabled(false);
    }
  }, [status]);
  return (
    <tr>
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
      <th className="flex flex-col justify-between items-center gap-3 h-full">
        {status}
        <div className="flex justify-around w-full mt-3">
          <button
            disabled={isDisabled}
            onClick={() => updateStatus("approved", _id)}
            className="btn btn-outline rounded-none btn-xs"
          >
            approved
          </button>
          <button
            disabled={isDisabled}
            onClick={() => updateStatus("denied", _id)}
            className="btn btn-outline rounded-none btn-xs"
          >
            denied
          </button>
          <button
            onClick={() => handleModal(_id)}
            className="btn btn-outline rounded-none btn-xs"
          >
            feedback
          </button>
        </div>
      </th>
    </tr>
  );
};

export default ClassRow;
