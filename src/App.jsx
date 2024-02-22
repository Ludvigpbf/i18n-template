import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col bg-black items-center justify-center mt-0 min-h-screen min-v-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
