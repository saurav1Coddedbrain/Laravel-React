import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Temple from "./pages/Temple";
import Chat from "./pages/Chat";
import Community from "./pages/community";
import Friends from "./pages/Friends";


function Main() {
    return (
        <Routes>
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/profile" exact={true} element={<Profile />} />
            <Route path="/temple" exact={true} element={<Temple />} />
            <Route path="/chat" exact={true} element={<Chat />} />
            <Route path="/community" exact={true} element={<Community />} />
            <Route path="/Friends" exact={true} element={<Friends />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

if (document.querySelector("#root")) {
    const root = createRoot(document.querySelector("#root"));

    root.render(
        // <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
        // </React.StrictMode>
    )
}

