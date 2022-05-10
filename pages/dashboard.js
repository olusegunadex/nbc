import { useAuth } from "../src/Hooks/useAuth/useAuth";

export default function Dashboard() {
  const { setState } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => setState(null)}>Logout</button>
    </>
  );
}
