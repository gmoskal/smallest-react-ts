import * as React from "react";
import { render } from "react-dom";
const App: React.FC = () => {
  const [cnt, setCnt] = React.useState(Math.floor(Math.random() * 1000));
  return <button onClick={_ => setCnt(cnt + 1)}>click me: {cnt}</button>;
};
render(<App />, document.getElementById("root"));
