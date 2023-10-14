// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import {
//   Box,
//   CardActionArea,
//   CardActions,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

// export default function TeamCard({ userData }: { userData: any }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//       }}
//     >
//       {userData.map((user: any, index: any) => (
//         <Card
//           sx={{
//             maxWidth: 345,
//             margin: "8px",
//             borderRadius: "16px",
//             boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//           }}
//           key={index}
//         >
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="160"
//               image={user.userImgUrl || "/images/user1.png"}
//               alt="User"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {user.userName}
//               </Typography>
//               <ul>
//                 <li>User Role: {user.userRole}</li>
//                 <li>User Position: {user.userPosition}</li>
//                 <li>Email: {user.userEmail}</li>
//                 <li>Phone: {user.userPhone}</li>
//               </ul>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <IconButton
//               href={user.userFacebookUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FacebookIcon />
//             </IconButton>
//             <IconButton
//               href={user.userTwitterUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <TwitterIcon />
//             </IconButton>
//             <IconButton
//               href={user.userLinkedInUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkedInIcon />
//             </IconButton>
//             <Box sx={{ display: "inline-block" }}>
//             <Tooltip title="Remove" placement="top">
//               <IconButton
//                 aria-label="remove"
//                 size="small"
//                 color="error"
//                 className="error"
//                 // onClick={() => deleteAlert(deleteTask(service.serviceId))}
//               >
//                 <DeleteIcon fontSize="inherit" />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="edit" placement="top">
//               <IconButton
//                 aria-label="rename"
//                 size="small"
//                 color="primary"
//                 className="primary"
//                 // onClick={() => handleEditClick(service)}
//               >
//                 <DriveFileRenameOutlineIcon fontSize="inherit" />
//               </IconButton>
//             </Tooltip>
//           </Box>
//           </CardActions>
        
//         </Card>
//       ))}
//     </div>
//   );
// }
