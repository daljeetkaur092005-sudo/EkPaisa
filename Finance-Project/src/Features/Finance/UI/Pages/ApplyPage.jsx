import { IndianRupee, ShieldCheck, ChevronDown } from "lucide-react";
import { useMain } from "../../Hooks/useMain";

const ApplyPage = () => {
  const { register, handleSubmit, errors, onSubmit } = useMain();

  const inputClass =
    "mt-1 w-full rounded-lg border border-[#D5E7D9] bg-[#FAFCFA] px-4 py-3 text-sm text-[#123D26] outline-none transition-all duration-200 placeholder:text-[#91A196] hover:border-[#9CC9A8] focus:border-[#087A3D] focus:bg-white focus:ring-2 focus:ring-[#087A3D]/10";

  const labelClass = "text-xs font-semibold text-[#244632] sm:text-sm";
  const errorClass = "mt-1 text-xs font-medium text-red-600";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5EC] via-white to-[#F9F3D9] px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-2xl border border-[#E2EDE4] bg-white shadow-xl shadow-green-950/10 md:grid-cols-2">

        {/* Compact Green Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#087A3D] via-[#076735] to-[#043D22] p-4 text-white sm:p-5">
          {/* Minimal Decorations */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-white/[0.04]" />

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="rounded-lg border border-[#F5C542]/30 bg-white/10 p-1.5">
                <IndianRupee size={17} className="text-[#F5C542]" />
              </div>

              <h1 className="text-lg font-bold tracking-tight">
                EkPaisa<span className="text-[#F5C542]">.</span>
              </h1>
            </div>

            {/* Short Main Content */}
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/10 px-2 py-1 text-[9px] font-semibold tracking-wide text-[#FFE28A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5C542]" />
                LOAN ENQUIRY
              </span>

              <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                Your goals, our guidance.
              </h2>

              <p className="mt-1.5 max-w-xs text-xs leading-5 text-green-100">
                Share your details to explore loan options with EkPaisa.
              </p>
            </div>

            {/* Compact Trust Information */}
            <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.07] p-2.5">
              <div className="shrink-0 rounded-lg bg-[#F5C542]/15 p-1.5">
                <ShieldCheck size={17} className="text-[#F5C542]" />
              </div>

              <div>
                <h3 className="text-xs font-semibold text-white">
                  Your details matter
                </h3>

                <p className="mt-0.5 text-[11px] leading-4 text-green-100">
                  Check your information before submitting.
                </p>
              </div>
            </div>

            {/* Short Footer Text */}
            <p className="mt-3 border-t border-white/15 pt-2 text-[11px] leading-4 text-green-100">
              Make every financial decision count.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="p-4 sm:p-6 lg:p-7">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087A3D] sm:text-xs">
              Loan enquiry
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123D26]">
              Your Details
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#647568] sm:text-sm">
              Fill in the information below to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
                <p className={errorClass}>{errors.fullName.message}</p>
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
                <p className={errorClass}>{errors.mobile.message}</p>
              )}
            </div>

            {/* Loan Type */}
            <div>
              <label className={labelClass}>Loan Type</label>

              <div className="relative mt-1">
                <select
                  defaultValue=""
                  {...register("loanType", {
                    required: "Please select a loan type",
                  })}
                  className="w-full cursor-pointer appearance-none rounded-lg border border-[#B8D8C0] bg-gradient-to-r from-[#F0F8F1] to-[#F9FCF8] px-4 py-3 pr-12 text-sm font-medium text-[#244632] outline-none transition-all duration-200 hover:border-[#087A3D] focus:border-[#087A3D] focus:bg-white focus:ring-2 focus:ring-[#087A3D]/10"
                >
                  <option value="" disabled>
                    Choose the type of loan
                  </option>
                  <option value="personal">Personal Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="home">Home Loan</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#087A3D]/10 text-[#087A3D]">
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <p className="mt-1 text-[11px] leading-4 text-[#7A8C7E]">
                Select the loan category you are interested in.
              </p>

              {errors.loanType && (
                <p className={errorClass}>{errors.loanType.message}</p>
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
                <p className={errorClass}>{errors.income.message}</p>
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
                <p className={errorClass}>{errors.loanAmount.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087A3D] to-[#064D29] px-4 py-3 text-sm font-bold text-white shadow-md shadow-green-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#0A8D48] hover:to-[#087A3D] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#087A3D]/20 active:translate-y-0"
            >
              Submit Application

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-center text-[11px] leading-4 text-[#7A8C7E]">
              Please check your details before submitting your enquiry.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ApplyPage;