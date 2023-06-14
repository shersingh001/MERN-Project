// import React, { useEffect, useState } from 'react';
// import style from './About.module.css';
// import userPic from '../../Assets/images/About-us/user-pic.png';
// import axios from 'axios';

// const About = () => {
//   const [user, setUser] = useState({
//     id:"", name:"", phone:"", email:""
//   })

//   const getUser = async () => {
//     const email = localStorage.getItem("email");

//     const response = await axios.post("http://localhost:8080/get-user", {
//         email
//     });
//     if (response.status === 200){
//       setUser({
//         id:response.data._id,
//         name: `${response.data.firstname} ${response.data.lastname}`,
//         phone: response.data.phone,
//         email: response.data.email
//       })
//     }
//     else if(!email){
//       setUser({})
//     }
//   }

//   useEffect(() => {
//     getUser();
//   }, [])

//   return (
//     <section className={style.container}>
//         <form>
//           <div className={style.about_section}>
//             <div className={style.user_profile}>
//               <img src={userPic} alt="user-pic" />
//             </div>
//             <div className={style.user_details}>
//               <h2>About</h2>
//               <div className={style.about_underling}></div>
//               <ul>
//                 <li><span>User id</span> : {user.id}</li>
//                 <li><span>Name</span> : {user.name}</li>
//                 <li><span>Phone</span> : {user.phone}</li>
//                 <li><span>Email</span> : {user.email}</li>
//               </ul>
//             </div>
//           </div>
//         </form>
//     </section>
//   )
// }

// export default About;
