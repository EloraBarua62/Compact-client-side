import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    fetch(`https://compact-server-side.onrender.com/user_info/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.parse(data),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Profile updated"));
  };
  return (
    <div className="my-10">
      <h1 className="text-2xl font bold ">User:{user?.displayName}</h1>
      <h1 className="text-xl font bold ">Email:{user?.email}</h1>
      <div className="flex justify-center items-center h-screen">
        <div class="card sm:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-3xl font-bold">User Info Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
              <input
                type="text"
                class="input input-bordered w-full max-w-2xl my-2"
                placeholder="User Name"
                {...register("name")}
              />
              <input
                type="text"
                class="textarea textarea-bordered w-full max-w-2xl my-2"
                placeholder="Email"
                {...register("email")}
              />
              <input
                type="text"
                class="input input-bordered w-full max-w-2xl my-2"
                placeholder="Education"
                {...register("education", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
              />
              <input
                type="text"
                class="input input-bordered w-full max-w-2xl my-2"
                placeholder="Location"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location is required",
                  },
                })}
              />
              <input
                type="text"
                class="input input-bordered w-full max-w-2xl my-2"
                placeholder="Phone number"
                {...register("phone")}
              />

              <input
                type="file"
                class="input input-bordered w-full max-w-2xl my-2"
                {...register("link", {
                  required: {
                    value: true,
                    message: "Upload Linked profile",
                  },
                })}
              />

              <input
                type="submit"
                class="input input-bordered w-full max-w-xs my-2 font-medium text-lg bg-purple-600 text-white hover:bg-purple-800 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
