// // components/MediaList.js
// import { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import firebaseConfig from '../../../../firebase.config';

// function MediaList() {
//   const [mediaData, setMediaData] = useState([]);

//   useEffect(() => {
//     // Check if Firebase is not already initialized
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
//     const firebaseServiceAccount: admin.ServiceAccount = {
//                 projectId: firebaseConfig.project_id,
//                 clientEmail: firebaseConfig.client_email,
//                 privateKey: servicefirebaseConfigAccount.private_key,
//               };
//     const fetchMedia = async () => {
//       try {
//         const storageRef = firebase.storage().bucket();
//         const files = await storageRef.listAll();

//         const mediaArray = await Promise.all(
//           files.items.map(async (file:any) => {
//             const url = await file.getDownloadURL();
//             return {
//               name: file.name,
//               url,
//             };
//           })
//         );

//         setMediaData(mediaArray);
//       } catch (error) {
//         console.error('Error fetching media:', error);
//       }
//     };

//     fetchMedia();
//   }, []);

//   return (
//     <div>
//       <h2>Media List</h2>
//       <ul>
//         {mediaData.map((media:any) => (
//           <li key={media.name}>
//             <a href={media.url} target="_blank" rel="noopener noreferrer">
//               {media.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MediaList;
