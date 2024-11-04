

import { atom, selector } from "recoil";
import axios from 'axios'

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

// we can't write an async fucnction in default like this
// export const notifications = atom({
//     key: "networkAtom",
    // default:async ()=>{
    //    const res= axios.get("https://sum-server.100xdevs.com/notifications")
    //    return res.data

    // }
// });

//write way
export const notifications = atom({
    key: "notificationsAtom",
    default:selector({
        key:"notificationsSelector",
        get:async ()=>{
            // await new Promise(r=>setTimeout(r,5000))// sleep for 5 sec
            // to see what is rendering at the time of fetching the data (white screen)
            const res= axios.get("http://localhost:3000/data")
            return res.data
     
         }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging;
        
    }
})