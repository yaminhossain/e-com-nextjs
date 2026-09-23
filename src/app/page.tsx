import React from "react";
import styles from "./homepage.module.css";

function Home() {
  return (
    <div className="h-screen bg-amber-300 ">
      <div className={`size-50 bg-red-300 ${styles.box1}`}></div>
    </div>
  );
}

export default Home;
