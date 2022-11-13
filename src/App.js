// import "./styles/main.css"; 
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "./routes/BaseRoutes";
import Preloader from "./components/UIElements/Preloader/Preloader";

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
