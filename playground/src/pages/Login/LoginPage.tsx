import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center my-auto h-full bg-white">
      <h1 className="text-2xl pb-4">Login</h1>
      <div className="py-2">
        <TextField id="outlined-basic" label="Login" variant="outlined" />
      </div>
      <div className="py-2">
        <TextField
          id="outlined-basic"
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
