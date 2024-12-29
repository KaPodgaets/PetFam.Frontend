import { useEffect } from "react";
import { axiosInstance } from "../../services/apiRequest";

export default function ProfilePage() {
  useEffect(() => {
    axiosInstance.get("Accounts/test").then((res) => console.log(res));
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
