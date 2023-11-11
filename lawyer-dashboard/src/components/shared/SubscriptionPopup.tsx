// // components/SubscriptionPopup.js
// "use client"
// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';

// const SubscriptionPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const hasSubscribed = Cookies.get('hasSubscribed');
//     if (!hasSubscribed) {
//       // If the user hasn't subscribed, show the popup after a delay
//       const timeoutId = setTimeout(() => {
//         setShowPopup(true);
//       }, 5000); // Adjust the delay as needed

//       return () => clearTimeout(timeoutId);
//     }
//   }, []);

//   const handleSubscribe = () => {
//     // Set a cookie to remember that the user has subscribed
//     Cookies.set('hasSubscribed', 'true', { expires: 7 }); // Expires in 7 days
//     setShowPopup(false);
//     // Add logic to handle the subscription (e.g., API call)
//   };

//   return (
//     showPopup && (
//       <div className="subscription-popup">
//         <h2>Subscribe to Our Newsletter</h2>
//         <p>Get the latest updates delivered straight to your inbox!</p>
//         <button onClick={handleSubscribe}>Subscribe</button>
//       </div>
//     )
//   );
// };

// export default SubscriptionPopup;
