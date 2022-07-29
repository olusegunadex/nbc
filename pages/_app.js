import { UserContextProvider } from "../src/Context/UserContext/UserContext";
import "../styles/globals.css";
import MyAppEntry from "./_appEntry";

const MyApp = () => {
  return (
    <UserContextProvider>
      <MyAppEntry />
    </UserContextProvider>
  );
};
export default MyApp;
