import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div id="mobile-bg"  className="flex justify-center items-center min-h-screen bg-red-200">
            <style jsx>{`
        #mobile-bg {background-image: url("C:/Users/robert.williams/repos/signup-form/pages/bg-intro-mobile.png")}
      `}</style>

      <div className="w-full max-w-xs bg-repeat">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="sr-only"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="sr-only"
              htmlFor="lastname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="sr-only"
              htmlFor="emailaddress"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailaddress"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="sr-only"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-400 hover:bg-blue-700 text-white font-bold p-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </div>
          <p className="text-sm text-center pt-4">by clicking the button, you are agreesing to our <a href="#" className="font-bold">Terms and Services</a></p>

        </form>
      </div>
    </div>
  );
};

export default Home;
