import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useRootDispatch, useRootSelector } from "../../store/redux";
import { authSelectors } from "../../modules/auth/authSlice";
import { loginThunk } from "../../modules/auth/login/logInThunk";

type LoginFields = {
  userEmail: string;
  password: string;
};
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFields>();

  const dispatch = useRootDispatch();

  const fetchStatus = useRootSelector(authSelectors.selectAuthFetchStatus);
  const accessToken = useRootSelector(authSelectors.selectAccessToken);

  const OnSubmit = async (data: LoginFields) => {
    dispatch(loginThunk(data));
  };

  return (
    <div className="flex flex-col justify-center items-center my-auto h-full bg-white">
      <div className="w-full">
        <h1>accessToken : {accessToken}</h1>
      </div>
      <h1 className="text-2xl pb-4">Login</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className="py-2">
          <TextField
            label="Login"
            variant="outlined"
            error={!!errors.userEmail}
            helperText={errors.userEmail?.message}
            {...register("userEmail", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email have to contain @";
                }
              },
            })}
          />
        </div>
        <div className="py-2">
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex flex-col py-2 items-center justify-center">
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isLoading}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
