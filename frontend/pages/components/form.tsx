import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

 const Form = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name cannot be empty"),
    lastName: yup.string().required("Last Name cannot be empty"),
    email: yup
      .string()
      .required("Looks like this is not an email")
      .email("this email address is invalid"),
    password: yup.string().required("Password cannot be empty"),
  });

  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState as any;

  function onSubmit(data: any) {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <div className="relative">
            <label className="sr-only" htmlFor="firstname">
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 
                          font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                           ${errors.firstName ? "is-invalid" : ""}`}
              id="firstname"
              type="text"
              {...register("firstName")}
              placeholder="First Name"
            />
            <div className="text-red-400 text-xs italic">
              {errors.firstName?.message}
            </div>
          </div>
        </div>
        <div className="relative mb-4">
          <label className="sr-only" htmlFor="lastname">
            First Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline
               ${errors.lastName ? "is-invalid" : ""}`}
            id="lastname"
            type="text"
            placeholder="Last Name"
          />
          <div className="text-red-400 text-xs">{errors.lastName?.message}</div>
        </div>
        <div className="relative mb-4">
          <label className="sr-only" htmlFor="emailaddress">
            Email Address
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline
               ${errors.email ? "is-invalid" : ""}`}
            id="emailaddress"
            type="text"
            placeholder="Email Address"
          />
          <div className="text-red-400 text-xs">{errors.email?.message}</div>
        </div>
        <div className="mb-6 relative">
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline
               ${errors.password ? "is-invalid" : ""}`}
            id="password"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <div className="text-red-400 text-xs">{errors.password?.message}</div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-400 hover:bg-blue-700 text-white font-bold p-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </div>
        <p className="text-sm text-center pt-4 text-gray-400">
          By clicking the button, you are agreesing to our{" "}
          <a href="/api/link" className="font-bold text-red-700">
            Terms and Services
          </a>
        </p>
      </form>
    </>
  );
};
export default Form;