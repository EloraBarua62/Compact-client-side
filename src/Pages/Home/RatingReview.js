import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RatingReview = () => {
  const { data: ratings, isLoading } = useQuery("user_rating", () =>
    fetch("https://compact-server-side.onrender.com/ratings")
    .then((res) =>res.json())
  );
  console.log(ratings);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full bg-purple-100 py-20">
      <h1 className="text-3xl font-bold text-center pb-8">
        "See what our user say "
      </h1>
      <div className="flex justify-center">
        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ratings.map((rating) => (
            <div class="card lg:max-w-lg bg-base-100 shadow-2xl shadow-purple-400 py-2">
              <div class="avatar flex justify-center">
                <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={rating.img} />
                </div>
              </div>
              <div class="card-body">
                <h2 class="text-xl font-bold">{rating?.name}</h2>
                <p className="text-md font-medium text-slate-600">
                  {rating?.review}
                </p>
                <div className="flex justify-center  text-stone-200 w-full pb-2">
                  <Rating
                    initialRating={rating.rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={
                      <FontAwesomeIcon
                        style={{ color: "rgb(250 204 21)" }}
                        icon={faStar}
                      />
                    }
                    fractions={2}
                    readonly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingReview;
