
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useMain = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      loanType: "Loan Against Property(LAP)",
      loanAmount: "",
      fullName: "",
      mobileNumber: "",
      monthlyIncome: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    watch,
    reset,
    errors,
    isSubmitting,
    onSubmit,
    navigate,
  };
};
