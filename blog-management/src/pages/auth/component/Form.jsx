import React from "react";

const Form = ({ type }) => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-500 text-sm font-bold">{type} with</h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="GitHub"
                    className="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                  />
                  Github
                </button>
                <button
                  className="bg-blue-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="Google"
                    className="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                  />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-400 text-center mb-3 font-bold">
                <small>Or register with credentials</small>
              </div>
              <form>
                {type === "Login" && (
                  <>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                  </>
                )}

                {type === "Register" && (
                  <>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="agreeTerms"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-500 hover:text-blue-800">
                        Terms and Conditions
                      </a>
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    {type}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-2">
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-gray-500 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-gray-500 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Form;
