import React from "react";
import { useDispatch } from "react-redux";
import { addResta } from "../redux/featureas/restaSlice";
import { useForm } from "react-hook-form";

const {
    reset,
    resetField,
    register,
    handleSubmit,
    formState: { errors },
} = useForm;

const onSub = (_bodyData) => {
    dispatch(addResta(_bodyData));
    reset();
    resetField();
};

const regexAlphabet = /[^-:,"'a-zA-Z]+/;
const regexPrice = /[0-4]/;

const Admin = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
            <form onSubmit={handleSubmit(onSub)}>
                <div className="bg-white px-10 rounded-xl w-screen shadow-md max-w-sm">
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
                            />
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
                            />
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
                                        value: 1,
                                        message: "price max length is 20 char!",
                                    },
                                    pattern: {
                                        value: regexPrice,
                                        message:
                                            "price Can only contain numbers 1-4",
                                    },
                                })}

                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">
                                image url
                            </label>
                            <input />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">
                                images1
                            </label>
                            <input />
                            <label className="block mb-1 text-gray-600 font-semibold">
                                images2
                            </label>
                            <input />
                            <label className="block mb-1 text-gray-600 font-semibold">
                                images3
                            </label>
                            <input />
                            <label className="block mb-1 text-gray-600 font-semibold">
                                images4
                            </label>
                            <input />
                            <label className="block mb-1 text-gray-600 font-semibold">
                                images5
                            </label>
                            <input />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">
                                cuisine
                            </label>
                            <input />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">
                                description
                            </label>
                            <input />
                        </div>
                    </div>

                    <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
                        Add Restaurants
                    </button>
                    <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
                        Reset Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Admin;
