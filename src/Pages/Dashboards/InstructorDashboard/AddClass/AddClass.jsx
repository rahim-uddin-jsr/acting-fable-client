import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddClass = () => {
  const img_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
  const img_api_url = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    fetch(img_api_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        const imageUrl = imgRes?.data?.display_url;
        if (imgRes.success) {
          data.img = imageUrl;
          data.status = "pending";
          data.uid = user.uid;
          data.price = parseFloat(data.price);
          data.availableSeats = +data.availableSeats;
          axiosSecure.post("/classes", data).then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          });
        }
      });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1024px]">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Let's add new classes!
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 text-left bg-base-200"
        >
          {/* row -  */}
          <div className="md:flex gap-3">
            {/* user email  */}
            <div className="w-full">
              <label htmlFor="userName">User Name</label>

              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={user?.displayName}
                  {...register("instructorName")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Email</label>

              <div className="relative">
                <input
                  type="email"
                  readOnly
                  value={user?.email}
                  {...register("instructorEmail")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>
          {/* row -2  */}
          <div className="md:flex gap-3">
            {/* user email  */}
            <div className="w-full">
              <label htmlFor="userName">Class Title</label>

              <div className="relative">
                <input
                  {...register("name")}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Class title"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="Total Sit">Total sit</label>

              <div className="relative">
                <input
                  type="number"
                  {...register("availableSeats")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Total sit"
                />
              </div>
            </div>
          </div>
          {/* row - 3 */}
          <div className="md:flex gap-3">
            {/* user email  */}
            <div className="w-full">
              <label htmlFor="userName">Class Image</label>

              <div className="relative">
                <input
                  {...register("img", { required: true })}
                  type="file"
                  className="rounded-lg border-gray-200 text-sm shadow-md file-input file-input-bordered  w-full"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Price</label>

              <div className="relative">
                <input
                  type="text"
                  {...register("price")}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="price"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
