import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useMain=()=>{
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


    return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigate
    }


}
