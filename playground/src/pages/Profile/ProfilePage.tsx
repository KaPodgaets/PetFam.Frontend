import { useEffect } from "react";
import { apiRequest } from "../../services/apiRequest";

export default function ProfilePage() {
  useEffect(() => {
    apiRequest.get("Accounts/test").then((res) => console.log(res));
  });
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
