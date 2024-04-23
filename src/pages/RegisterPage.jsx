import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="h-8 mr-2"
            src="/EdublendLogo.png"
            alt="logo"
          ></img>
        </a>

        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-purple">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-purple">
              Create an account
            </h1>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className={`py-2 px-4 rounded bg-white ${
                  role === "parent"
                    ? "border-b-2 text-purple"
                    : "bg-white border-b-2"
                }`}
                onClick={() => setRole("parent")}
              >
                For Parents
              </button>
              <button
                className={`py-2 px-4 rounded bg-white ${
                  role === "teacher"
                    ? "border-b-2 text-purple"
                    : "bg-white border-b-2"
                }`}
                onClick={() => setRole("teacher")}
              >
                For Teachers
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              class="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-purple dark:text-purple"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-purple dark:text-purple"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-purple"
                >
                  Confirm Password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
                <div>
                  <label
                    for="school"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-purple"
                  >
                    School Name
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>

                {role === "parent" && (
                  <div className="my-4">
                    <div className="flex gap-4">
                      <div>
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium text-purple dark:text-purple"
                        >
                          Child's Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="child-name"
                          class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required=""
                        ></input>
                      </div>
                      <div>
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium text-purple dark:text-purple"
                        >
                          Child's Surname
                        </label>
                        <input
                          type="text"
                          name="surname"
                          id="child-surname"
                          class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                          required=""
                        ></input>
                      </div>
                    </div>
                    <label
                      for="email"
                      class="block my-2 text-sm font-medium text-purple dark:text-purple"
                    >
                      Teacher's Name/Surname
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                      required=""
                    ></input>
                    <label
                      for="email"
                      class="block my-2 text-sm font-medium text-purple dark:text-purple"
                    >
                      School No.
                    </label>
                    <input
                      type="number"
                      name="school-no"
                      id="school-no"
                      class="border border-purple text-purple bg-white sm:text-sm rounded-full focus:border-dark-purple block w-full p-1.5 dark:border-purple dark:text-purple dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123456789"
                      required=""
                    ></input>
                  </div>
                )}
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-purple hover:bg-primary-700 hover:bg-dark-purple focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
