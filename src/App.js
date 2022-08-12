import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import LoginPage from "./pages/login/LoginPage";
import Loader from "./components/loader/Loader";
import HomePage from "./pages/home";
import ChatPage from "./pages/chat";
import { setUser } from "./app/currentUserSlice";


function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const [users] = useCollectionData(collection(db, "users"));

  useEffect(() => {
    if (user && users) {
      dispatch(setUser(users.find(el => el.email === user.email)));
    }
  }, [user, users, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return user ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
