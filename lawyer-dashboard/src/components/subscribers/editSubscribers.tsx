// "use client";
// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import AddIcon from "@mui/icons-material/Add";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import dynamic from "next/dynamic";
// import { updateTaskAlert } from "../alerts/alerts";
// import { ClearIcon } from "@mui/x-date-pickers";
// import CustomTypography, { FormFooter } from "../shared/formsComponents";
// const RichTextEditor = dynamic(() => import("@mantine/rte"), {
//   ssr: false,
// });

// export default function EditSubscribersComponent({
//   onUpdate,
// selectedSubscriber,
//   handleClose,
// }: {
//   onUpdate: any;
//   selectedSubscriber: any;
//   handleClose: any;
// }) {



//   return (
//     <div style={{ maxHeight: "100%", overflowY: "auto" }}>
//       <Card
//         sx={{
//           boxShadow: "none",
//           borderRadius: "10px",
//           p: "25px 20px 15px",
//           mb: "15px",
//         }}
//       >
//         <Box
//           component="form"
//           noValidate={false}
//           action={async (formData) => {
//             handleClose();
//             handleUpdate();

//             await onUpdate(formData, selectedSubscriber.newsId, selectedImage);
//             updateTaskAlert();
//           }}
//         >
//           <Grid container alignItems="center" spacing={2}>
//             <Grid item xs={12} md={12} lg={12}>
//               <CustomTypography text={"News Title"} />

//               <TextField
//                 autoComplete="NewsTitle"
//                 name="newsTitle"
//                 required
//                 fullWidth
//                 id="newsTitle"
//                 label="News title"
//                 value={formData.newsTitle}
//                 autoFocus
//                 InputProps={{
//                   style: { borderRadius: 8 },
//                 }}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} md={12} lg={6}>
//               <CustomTypography text={"Image"} />

//               <input
//                 autoComplete="image"
//                 name="image"
//                 accept="image/png"
//                 id="image"
//                 type="file"
//                 autoFocus
//                 onChange={(files) => handleImageChange(files)}
//               />
//             </Grid>

//             {selectedImage && (
//               <div>
//                 <h3>Preview:</h3>
//                 <img
//                   src={URL.createObjectURL(selectedImage)}
//                   alt="Selected"
//                   width="200"
//                 />
//               </div>
//             )}

//             <Grid item xs={12} md={12} lg={12}>
//               <CustomTypography text={"News Content"} />

//               <TextField
//                 multiline
//                 minRows={10}
//                 autoComplete="newsContent"
//                 name="newsContent"
//                 required
//                 fullWidth
//                 value={formData.newsContent}
//                 id="newsContent"
//                 label="News Content"
//                 autoFocus
//                 InputProps={{
//                   style: { borderRadius: 8 },
//                 }}
//                 onChange={handleInputChange}
//               />
//             </Grid>

//             <Grid item xs={12} md={12} lg={6}>
//               <CustomTypography text={"News Status"} />

//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">status</InputLabel>
//                 <Select
//                   name="isFlag"
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={status}
//                   label="status"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={"ready"}>ready</MenuItem>
//                   <MenuItem value={"not ready"}>Not ready</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             {/* <Grid item xs={12} md={12} lg={6}>
//               <CustomTypography text={"Author"} />

//               <TextField
//                 autoComplete="Author"
//                 name="authorName"
//                 required
//                 fullWidth
//                 value={formData.authorName}
//                 id="authorName"
//                 label="Author"
//                 autoFocus
//                 InputProps={{
//                   style: { borderRadius: 8 },
//                 }}
//                 onChange={handleInputChange}
//               />
//             </Grid> */}
//             <FormFooter handleClose={handleClose} title={"Edit News"} />
//           </Grid>
//         </Box>
//       </Card>
//     </div>
//   );
// }
