import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { getHello } from "../../api/hello";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoginPage() {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHello = async () => {
      setIsLoading(true);
      const result: string = await getHello();
      setText(result);
      setIsLoading(false);
    };

    fetchHello();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-auto h-full bg-white">
      <div>{isLoading ? <CircularProgress /> : <p>{text}</p>}</div>
      <h1 className="text-2xl pb-4">Login</h1>
      <div className="py-2">
        <TextField id="login-input" label="Login" variant="outlined" />
      </div>
      <div className="py-2">
        <TextField
          id="password-input"
          label="Password"
          variant="outlined"
          type="password"
        />
      </div>
      <div className="py-2">
        <Button variant="contained" size="large">
          Login
        </Button>
      </div>
    </div>
  );
}
