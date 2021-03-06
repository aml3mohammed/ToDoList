import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import ToDo from "./components/ToDo";
// import GlobalStyles from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo</h1>
        <ToDo />
        {/* <GlobalStyles /> */}
      </div>
    </Provider>
  );
}

export default App;
