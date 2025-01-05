import { Button } from "@mui/material";
import {
  useTestQuery,
  useTestWithCredentialsQuery,
} from "../../modules/auth/testApi";
import { loginThunk } from "../../modules/auth/login/loginThunk";
import { AppState, useAppDispatch } from "../../shared/store/redux";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../modules/auth/authSlice";

export default function ProfilePage() {
  const { data, refetch: withoutCredentialsRefetch } = useTestQuery();
  const { data: testResponse, refetch: withCredRefetch } =
    useTestWithCredentialsQuery();

  const dispatch = useAppDispatch();

  const accessToken = useSelector((state: AppState) =>
    selectAccessToken(state)
  );

  const fetchByRTKQuery = async () => {
    withoutCredentialsRefetch();
  };
  const refetchWIthToken = async () => {
    withCredRefetch();
  };

  const handleLogin = async () => {
    const x = {
      userEmail: "admin@admin.com",
      password: "!Admin123",
    };

    dispatch(loginThunk(x));
  };

  return (
    <div>
      <div>
        <h1>RTK Query test without credentials</h1>
        <h2>{data}</h2>
      </div>
      <div>
        <Button onClick={() => fetchByRTKQuery()}>
          fetch without credentials
        </Button>
      </div>
      <div>
        <h1>RTK Query test WITH credentials</h1>
        <h2>{testResponse}</h2>
      </div>
      <div>
        <Button onClick={() => refetchWIthToken()}>
          fetch without credentials
        </Button>
      </div>
      <div>
        <div>
          <h1>Login Tests</h1>
          <p>{accessToken}</p>
        </div>
        <div>
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
}
