import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom,totalNotificationSelector } from "./store/atoms/atom"

import { useMemo } from "react"
//wrap all the things inside the recoilRoot
function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>

  )
}
function MainApp()
{
  const networknotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messagingCount,setMessagingCount] = useRecoilState(messagingAtom)
  // const messagingCount = useRecoilValue(messagingAtom)


  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  // const totalNotificationCount = networknotificationCount+jobsAtomCount+notificationCount+messagingCount;
  // const totalNotificationCount =useMemo(()=>{
  //   return  networknotificationCount+jobsAtomCount+notificationCount+messagingCount;
  // },[ networknotificationCount,jobsAtomCount,notificationCount,messagingCount])

  return (
    <>
     <button>Home</button> &nbsp;
     <button>My Network ({networknotificationCount>=100? "99+":networknotificationCount})</button>&nbsp;
     <button>Jobs ({jobsAtomCount})</button>&nbsp;
     <button>Messaging ({messagingCount})</button>&nbsp;
     <button>Notifications ({notificationCount})</button>&nbsp;
     <button onClick={
      ()=>{
        setMessagingCount(c=>c+1)
      }
     }>Me ({totalNotificationCount})</button>
    {/* <ButtonUpadater/> */}
    </>
  )
}
// function ButtonUpadater()
// {
//   const setMessagingCount = useSetRecoilState(messagingAtom)
//   return(
//     <button onClick={
//       ()=>{
//         setMessagingCount(c=>c+1)
//       }
//      }>Me ({totalNotificationCount})</button>
//   )
// }
export default App
