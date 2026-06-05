import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Name:", data.name);
    console.log("Age:", data.age);
    console.log("Email:", data.email);
    console.log("Address:", data.address);
    console.log("Gender:", data.gender);
    console.log("Department:", data.department);
    console.log("Terms:", data.terms);

    console.log("File:", data.resume?.[0]);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="border-b border-zinc-800 px-8 py-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            User Registration
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Fill in your details below
          </p>
        </div>

        <div className="px-8 py-6 space-y-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                register={register}
                errors={errors}
                placeholder="Enter full name"
                rules={{
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters are allowed",
                  },
                }}
              />
              <InputField
                label="Age"
                name="age"
                type="number"
                placeholder="Enter your age"
                register={register}
                errors={errors}
                rules={{
                  required: "Age is required",
                }}
              />
            </div>
            <br />
            <div>
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                register={register}
                errors={errors}
                rules={{
                  required: "Age is required",
                }}
                inputClass="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>
            <br />
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter your full address..."
                {...register("address", {
                  required: "Address is required",
                })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
              ></textarea>
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <br />
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                Gender
              </label>

              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Male"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    className="accent-white w-4 h-4"
                  />
                  <span className="text-sm text-zinc-300">Male</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Female"
                    {...register("gender")}
                    className="accent-white w-4 h-4"
                  />
                  <span className="text-sm text-zinc-300">Female</span>
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>
            <br />
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
                Department
              </label>

              <select
                {...register("department", {
                  required: "Department is required",
                })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
              >
                <option value="" className="bg-zinc-900">
                  Select Department
                </option>

                <option value="IT" className="bg-zinc-900">
                  IT
                </option>

                <option value="HR" className="bg-zinc-900">
                  HR
                </option>

                <option value="Accounts" className="bg-zinc-900">
                  Accounts
                </option>
              </select>
              {errors.department && (
                <p className="text-red-500">{errors.department.message}</p>
              )}
            </div>
            <br />
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
                Upload Resume
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume", {
                  required: "Resume is required",
                })}
                className="w-full text-sm text-zinc-400 border border-zinc-700 rounded-lg cursor-pointer bg-zinc-800 file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:border-r file:border-zinc-700 file:text-sm file:font-semibold file:bg-zinc-700 file:text-zinc-200 hover:file:bg-zinc-600 transition-colors"
              />
              {errors.resume && (
                <p className="text-red-500">{errors.resume.message}</p>
              )}
              <br />
              <input
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: "Accept terms and conditions",
                })}
                className="accent-white w-4 h-4 mt-0.5 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-zinc-400 cursor-pointer"
              >
                I agree to the{" "}
                <span className="text-white font-medium underline underline-offset-2">
                  terms and conditions
                </span>
              </label>
              {errors.terms && (
                <p className="text-red-500">{errors.terms.message}</p>
              )}
            </div>
            <br />
            <button
              type="submit"
              className="w-full bg-white hover:bg-zinc-100 active:scale-95 text-black font-semibold text-sm py-2.5 rounded-lg transition-all duration-150 tracking-wide"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
