//https://github.com/100xdevs-cohort-2/7.4 for code
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './store/atoms/asy_atom.jsx'
import { useEffect } from 'react'
import axios from 'axios'

function Asy_data() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
// dueto it there is a flash of default values 
// example all defalut values are the 0
//when i refresh the page the new values will come after the some time lates
// so we see the default values
//to avoid this problem get the data at the place of default value
  useEffect(() => {
    // fetch
    axios.get("http://localhost:3000/data")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network>= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default Asy_data;