import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2FNjGToWrNOrcdY2rMMYbCnd2jvkmpCOER0IFoTbAW2cROPw23ivTXddaVL9cd5SgeSQ38lAwf9gXLChdK4gy500YHVNvhVA"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://compact-server-side.onrender.com/my_order/${id}`;
  const { data: order, isLoading } = useQuery(["my_order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div classname="flex justify-center items-center">
      {/* <h1>Pay for : {id}</h1> */}
      <div class="card w-50 max-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 className=" font-bold text-4xl">Hello {order?.name}</h1>
          <h2 class="text-center text-lg">Product name : {order?.partsName}</h2>
          <h2 class="text-center text-lg">Product ID : {order?.partsId}</h2>
          <div class="avatar flex justify-center">
            <div class="w-20 rounded">
              <img src={order?.partsImg} alt="compact" />
            </div>
          </div>
          <h2 class="text-center text-lg">Quantity : {order?.quantity}</h2>
          <p className="  bg-green-600 p-2 text-lg font-bold text-white">
            Pay : {order?.price}
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-10">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
