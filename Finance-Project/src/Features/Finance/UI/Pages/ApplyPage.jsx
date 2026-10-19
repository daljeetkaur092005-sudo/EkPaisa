import { IndianRupee, ShieldCheck, ChevronDown } from "lucide-react";
import { useMain } from "../../Hooks/useMain";

const ApplyPage = () => {
  const { register, handleSubmit, errors, onSubmit } = useMain();

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#D5E7D9] bg-[#FAFCFA] px-4 py-3.5 text-sm text-[#123D26] outline-none transition-all duration-200 placeholder:text-[#91A196] hover:border-[#9CC9A8] focus:border-[#087A3D] focus:bg-white focus:ring-4 focus:ring-[#087A3D]/10";

  const labelClass = "text-sm font-semibold text-[#244632]";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5EC] via-white to-[#F9F3D9] px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-[#E2EDE4] bg-white shadow-2xl shadow-green-950/10 md:grid-cols-2">
        {/* Left Side */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#087A3D] via-[#076735] to-[#043D22] p-8 text-white sm:p-10">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/[0.04]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-[#F5C542]/30 bg-white/10 p-2.5 shadow-lg">
                <IndianRupee size={27} className="text-[#F5C542]" />
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                EkPaisa<span className="text-[#F5C542]">.</span>
              </h1>
            </div>

            <div className="mt-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#FFE28A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5C542]" />
                YOUR FINANCIAL JOURNEY
              </span>

              <h2 className="mt-5 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                Find a loan that fits your needs.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-green-100">
                Share a few details about yourself and the kind of loan you are
                exploring. Start your enquiry with EkPaisa.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-[#F5C542]/15 p-2.5">
                  <ShieldCheck size={23} className="text-[#F5C542]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Your details matter
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-green-100">
                    Review your information before submitting your enquiry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm leading-6 text-green-100">
                Make informed financial decisions, one step at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Right Side - Form */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087A3D]">
              Loan enquiry
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#123D26] sm:text-3xl">
              Your Details
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#647568]">
              Fill in the information below to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name</label>

              <input
                {...register("fullName", {
                  required: "Name is required",
                })}
                placeholder="Enter your full name"
                autoComplete="name"
                className={inputClass}
              />

              {errors.fullName && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className={labelClass}>Mobile Number</label>

              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                placeholder="Enter your 10-digit number"
                autoComplete="tel-national"
                className={inputClass}
              />

              {errors.mobile && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Loan Type */}
            <div>
              <label className={labelClass}>Loan Type</label>

              <div className="relative mt-2">
                <select
                  defaultValue=""
                  {...register("loanType", {
                    required: "Please select a loan type",
                  })}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-[#B8D8C0] bg-gradient-to-r from-[#F0F8F1] to-[#F9FCF8] px-4 py-4 pr-12 text-sm font-medium text-[#244632] shadow-sm shadow-green-950/[0.03] outline-none transition-all duration-200 hover:border-[#087A3D] hover:shadow-md hover:shadow-green-900/[0.06] focus:border-[#087A3D] focus:bg-white focus:ring-4 focus:ring-[#087A3D]/10"
                >
                  <option value="" disabled>
                    Choose the type of loan
                  </option>

                  <option value="personal">Personal Loan</option>

                  <option value="business">Business Loan</option>

                  <option value="home">Home Loan</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#087A3D]/10 text-[#087A3D]">
                    <ChevronDown size={18} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <p className="mt-2 text-xs text-[#7A8C7E]">
                Select the loan category you are interested in.
              </p>

              {errors.loanType && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.loanType.message}
                </p>
              )}
            </div>

            {/* Monthly Income */}
            <div>
              <label className={labelClass}>Monthly Income (₹)</label>

              <input
                type="number"
                {...register("income", {
                  required: "Income is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Enter a valid income",
                  },
                })}
                placeholder="Enter monthly income"
                className={inputClass}
              />

              {errors.income && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.income.message}
                </p>
              )}
            </div>

            {/* Loan Amount */}
            <div>
              <label className={labelClass}>Loan Amount (₹)</label>

              <input
                type="number"
                {...register("loanAmount", {
                  required: "Loan amount is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Enter a valid loan amount",
                  },
                })}
                placeholder="Enter the amount you need"
                className={inputClass}
              />

              {errors.loanAmount && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.loanAmount.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087A3D] to-[#064D29] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#0A8D48] hover:to-[#087A3D] hover:shadow-xl hover:shadow-green-900/20 focus:outline-none focus:ring-4 focus:ring-[#087A3D]/20 active:translate-y-0"
            >
              Submit Application
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-center text-xs leading-5 text-[#7A8C7E]">
              Please check your details before submitting your enquiry.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ApplyPage;
