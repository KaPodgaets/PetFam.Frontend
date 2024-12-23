import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AccountsService } from "../../services/accounts";

type LoginFields = {
  userEmail: string;
  password: string;
};
export default function LoginPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");

  const notify = (x: string) => toast(x);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const OnSubmit = async (data: LoginFields) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await AccountsService.login(
        data.userEmail,
        data.password
      );
      setAccessToken(response.data.result!.accessToken);
      setRefreshToken(response.data.result!.refreshToken);
      console.log(response);
      console.log(accessToken, refreshToken);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      notify("something went wrong");
    }
  };

  useEffect(() => {}, [refreshToken]);

  return (
    <div className="flex flex-col justify-center items-center my-auto h-full bg-white">
      <div>
        <p>{accessToken}</p>
        <p>{refreshToken}</p>
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
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
