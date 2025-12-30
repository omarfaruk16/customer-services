import "./App.css";
import { ToastContainer } from "react-toastify";
import { Suspense, useState } from "react";
import Navber from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import HeroCard from "./Components/HeroCard/HeroCard";
import CustomerTicket from "./Components/CustomerTicket/CustomerTicket";
import TaskStatus from "./Components/CustomerTicket/TaskStatus";
import ResolvedCard from "./Components/CustomerTicket/ResolvedCard"

const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const DataPromise = dataFetch();
function App() {
  const [inProgress,setinProgress] = useState([])
  const [resolved,setresolved] = useState([])

  return (
    <div className="">
      <Navber></Navber>
      <div className="max-w-[1300px] mx-auto">
        <HeroCard inProgress={inProgress} resolved={resolved}></HeroCard>
        <div className="w-full md:flex gap-8">
          <div className="md:w-4/5">
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl"></span>
              }
            >
              <CustomerTicket DataPromise={DataPromise} inProgress={inProgress} setinProgress={setinProgress}></CustomerTicket>
            </Suspense>
          </div>
          <div className="md:w-1/5">
              <TaskStatus inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved} ></TaskStatus>
              <ResolvedCard resolved={resolved} setresolved={setresolved}></ResolvedCard>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
