import { Provider } from "react-redux";
import "./App.css";
import router from "./Routes/AllRoutes";
import { store } from "./Redux/store";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  );
}

export default App;
