import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { createContext, useState } from "react";

import "./App.css";

import RootLayout from "./components/layout/RootLayout";
import Home from "./components/layout/components/Home";
import CreatePost from "./components/layout/components/post/CreatePost";
import Profile from "./components/layout/components/Profile";
import Reels from "./components/layout/components/Reels";
import { IUser } from "@Interfaces/index";

export const userContext = createContext<{userData: IUser, setUserData: any}>(null);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout/>}>
        <Route path="home" element={<Home />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="reels" element={<Reels />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/auth" element={<RootLayout/>}>

      </Route>
    </Route>
  )
);

const App = () => {
  const [userData, setUserData] = useState<IUser>({
    id: "1",
    username: "tanishq.ameta",
    name: "Tanishq Ameta",
    bio: "",
    email: "",
    imageUrl: ""
  });

  return (
    <div className="app">
      <userContext.Provider value={{userData, setUserData}}>
        <RouterProvider router={router} />
      </userContext.Provider>
    </div>
  );
}

export default App;