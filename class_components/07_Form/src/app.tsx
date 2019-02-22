import * as React from "react";
import { Header } from "./components";

export const App: React.StatelessComponent<{}> = props => (
  <div className="container-fluid">
    <Header />
    {props.children}
  </div>
);
