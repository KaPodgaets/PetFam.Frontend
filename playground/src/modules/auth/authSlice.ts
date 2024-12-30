export type AuthState = {
  accessToken: string | undefined;
  isAuthenticated: boolean;
  authStatus: "idle" | "loading" | "authenticated" | "unauthenticated";
};

const initialAuthState = {
  accessToken: undefined,
  isAuthenticated: false,
  authState: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
});
