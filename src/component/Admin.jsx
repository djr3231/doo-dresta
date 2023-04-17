import React from "react";
import { useDispatch } from "react-redux";
import { addResta } from "../redux/featureas/restaSlice";
import { useForm } from "react-hook-form";

const Admin = () => {
  const dispatch = useDispatch();
  const {
    reset,
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (_bodyData) => {
    dispatch(addResta(_bodyData));
    console.log(_bodyData);
  };

  const regexAlphabet = /^[a-zA-Z0-9]/;
  const regexPrice = /[0-4]/;

  return (
    <div className=" bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
      <form onSubmit={handleSubmit(onSub)}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Add a Restaurants
            </h1>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                name
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "resta name required!!",
                  },
                  maxLength: {
                    value: 50,
                    message: "resta name max length is 50 char!",
                  },
                  minLength: {
                    value: 2,
                    message: "resta name required min 2 char!",
                  },
                  pattern: {
                    value: regexAlphabet,
                    message:
                      "resta name Can only contain upper and lower case letters, numbers, : and , . ' etc.",
                  },
                })}
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                city
              </label>
              <input
                {...register("city", {
                  required: {
                    value: true,
                    message: "city required!!",
                  },
                  maxLength: {
                    value: 20,
                    message: "city max length is 20 char!",
                  },
                  minLength: {
                    value: 2,
                    message: "resta name required min 2 char!",
                  },
                  pattern: {
                    value: regexAlphabet,
                    message:
                      "city Can only contain upper and lower case letters, numbers, : and , . ' etc.",
                  },
                })}
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.city && (
                <p className="text-red-600">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                price
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "price required!!",
                  },
                  max: {
                    value: 4,
                    message: "Rate price from 1 to 4 only",
                  },
                  pattern: {
                    value: regexPrice,
                    message: "price Can only contain numbers 1-4",
                  },
                })}
                type="number"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.price && (
                <p className="text-red-600">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                image url
              </label>
              <input
                {...register("main_img", {
                  required: {
                    value: true,
                    message: "main img is required...",
                  },
                })}
                type="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.main_img && (
                <p className="text-red-600">{errors.main_img.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                cuisine
              </label>
              <input
                {...register("cuisine", {
                  required: {
                    value: true,
                    message: "cuisine is required...",
                  },
                  maxLength: {
                    value: 50,
                    message: "cuisine must be less 50 chars...",
                  },
                  minLength: {
                    value: 2,
                    message: "cuisine must be at least 2 char",
                  },
                })}
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.cuisine && (
                <p className="text-red-600">{errors.cuisine.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                image 1
              </label>
              <input
                {...register("img[0]")}
                t
                ype="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              <label className="block mb-1 text-gray-600 font-semibold">
                image 2
              </label>
              <input
                {...register("img[1]")}
                type="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              <label className="block mb-1 text-gray-600 font-semibold">
                image 3
              </label>
              <input
                {...register("img[2]")}
                type="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              <label className="block mb-1 text-gray-600 font-semibold">
                image 4
              </label>
              <input
                {...register("img[3]")}
                type="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              <label className="block mb-1 text-gray-600 font-semibold">
                image 5
              </label>
              <input
                {...register("img[4]")}
                type="url"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                description
              </label>
              <input
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is required...",
                  },
                  maxLength: {
                    value: 250,
                    message: "description must be less 250 chars...",
                  },
                  minLength: {
                    value: 10,
                    message: "description must be at least 10 char",
                  },
                  pattern: {
                    value: regexAlphabet,
                    message:
                      "description Can only contain upper and lower case letters, numbers, : and , . ' etc.",
                  },
                })}
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
              {errors.description && (
                <p className="text-red-600">{errors.description.message}</p>
              )}
            </div>
          </div>

          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Add Restaurants
          </button>
          <button
            onClick={() => {
              reset();
              resetField();
            }}
            className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
