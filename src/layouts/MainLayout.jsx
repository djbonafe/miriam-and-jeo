import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "../styles.css";
export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <main className="dyanamic-content">
        <Outlet />
      </main>
    </div>
  );
}
