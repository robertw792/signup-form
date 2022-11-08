import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen text-[16px] text-white bg-red-300 bg-cover bg-[url(../public/bg-intro-mobile.png)] sm:bg-[url(../public/bg-intro-desktop.png)]">
      <div className="w-full max-w-xs">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Learn to code by watching others</h1>
          <p>See how experience developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <div className="bg-violet-600 text-center rounded-lg shadow-2xl p-4 mb-6 mt-10">
          <p className=""><b>Try it free 7 days</b> then<br/> $20/mo. thereafter</p>
        </div>
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
          <p className="text-sm text-center pt-4 text-gray-400">By clicking the button, you are agreesing to our <a href="#" className="font-bold text-red-700">Terms and Services</a></p>

        </form>
      </div>
    </div>
    </>
  );
};

export default Home;
