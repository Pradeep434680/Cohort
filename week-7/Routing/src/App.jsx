// this is the notes for Routing
// importing things in routing
// 1)-navigate hook
// .. 2)lazy
//3). suspense api used in lazy 
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
import { lazy,Suspense } from 'react'
// suspense api => asynchronous component fetching ,asynchronously data fetching
// because when i goes to landing to deshboard the data comes from backend only dashboard code will come dueto lazy
// import { Dashboard } from './components/dashboard'
// this is the lazy syntex of Dashboard(kaam ka code only for only deshboard)
// const Dashboard = React.lazy(()=>import("./components/Dashboard"))
const Dashboard =lazy(()=>import("./components/Dashboard"))
const Landing =lazy(()=>import("./components/Landing"))
// // now change the export default 

// import { Landing } from './components/Landing'

// function App() {

//   return (
//     <div>
//       <div>
//         <button onClick={()=>{
//           window.location.href="/"//=>in this case when we go from one page to another
//           // the page reload it means that html comes from the backend =>this is not clint side routing
//         }}>Landing page</button>
//         <button onClick={()=>{
//           window.location.href="/dashboard"

//         }}>Dashboard</button>
//       </div>
//   routing in front end
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/" element={<Landing/>}/>
//         </Routes>
      
//       </BrowserRouter>

//     </div>
//   )
// }


// to switch the pages 
//=> hook navigate =>useNavigate()
// useNavigate() hook always use inside the <Browser/>
// otherwise it willl throw error all things related navigate hook should be inside the <brower/>component
function App() {
  // const navigate = useNavigate();
  return (
    <div>
      {/* <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing page</button>
        <button onClick={()=>{
          navigate("/dashboard")

        }}>Dashboard</button>
      </div> */}
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}
function Appbar()
{
  const navigate = useNavigate();
  return(
    <div>
    <button onClick={()=>{
      navigate("/")
    }}>Landing page</button>
    <button onClick={()=>{
      navigate("/dashboard")

    }}>Dashboard</button>
  </div>
  )
}

export default App
