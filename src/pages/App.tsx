import styles from "@styles/app.module.scss";
import { Component } from "solid-js";

const App: Component<{}> = (props) => {
  return (
    <div>
      <h1 class={`${styles["app__heading"]}`}>Nazmus's Fluid typo</h1>
    </div>
  );
};

export default App;
