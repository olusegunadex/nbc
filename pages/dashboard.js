import { useAuth } from "../src/Hooks/useAuth/useAuth";
import { useRoutes } from "../src/Hooks/useRoutes/useRoutes";

export default function Dashboard() {
  const { authData, setAuthData } = useAuth();
  useRoutes(authData.user, "/dashboard", "/register");

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => setAuthData({ ...authData, user: null })}>
        Logout
      </button>
    </>
  );
}
