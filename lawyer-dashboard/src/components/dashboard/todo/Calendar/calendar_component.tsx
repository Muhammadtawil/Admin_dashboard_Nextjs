"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CustomTypography, { ValuesSelect } from "../../shared/formsComponents";
import interactionPlugin from '@fullcalendar/interaction';
import { arLocale, enLocale } from '../../../../../localeConfig';
import { useLocale,useTranslations } from "next-intl";
import timeGridPlugin from '@fullcalendar/timegrid'
import { successAlert } from "../../alerts/alerts";
import { useSession } from "next-auth/react";
// import 'dayjs/locale/ar-lb';
import Swal from "sweetalert2";
import { RiNurseFill } from "react-icons/ri";

// Add event modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

const CalendarComponent = ({onCreate,events,onUpdate,onDelete,onUpdatePublic, onDeletePublic}:{events:any,onCreate:any,onUpdate:any,onDelete:any,onUpdatePublic:any, onDeletePublic:any}) => {
  // Add event modal
  const t=useTranslations('agendaPage')
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setSelectedEvent(null);
  };

  const { data: session } = useSession();
  const statusValues = ["Public", "private"];
const locale=useLocale()
 // Set the locale to Arabic (Lebanon) here
// dayjs.locale('ar-lb');

  // Date & Time ickers
  const [value, setValue] = useState(
    isEditing && selectedEvent.start ? dayjs(selectedEvent.start) : dayjs()
  );

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  
  const handleEventClick = (info: any) => {




    if (info.event.groupId  === 'Public' && session?.UserRole === 'USER') {
      // If it's a public event and the user role is USER, prevent editing

      return null;
    } else {
      setSelectedEvent(info.event);


      setIsEditing(true);
      handleOpen();

    }
  };



  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>{t('title')}</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>{t('title')}</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            component="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
      {/* {t('title')} */}
          </Typography>

          <Button
            onClick={handleOpen}
            // onClick={() => {
            //   console.log(events)
            // }}

            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 20px",
              color: "#fff !important",
              backgroundColor:"#040831"
            }}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className="mr-5px"
            />{" "}
  {t('add')}
          </Button>
        </Box>

        {/* <FullCalendar
          initialView="dayGridDay"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
          displayEventEnd={false}
          eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          selectable={true}
          locales={[arLocale, enLocale]}
          locale={locale == 'ar' ? 'ar' : 'en'}
          editable={true}
         
        /> */}
              <FullCalendar
          initialView="dayGridMonth"
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          events={events}
          displayEventEnd={false}
          // eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          eventColor="#040831"
          selectable={true}
          locales={[arLocale, enLocale]}
          locale={locale == 'ar' ? 'ar-LB' : 'en'}
        
          editable={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          // eventBackgroundColor={events.eventStatus=='public'?"green":"red" }
          eventClick={handleEventClick}
    //  eventBorderColor="green"
          // eventRender={handleEventRender} 
          // handleCustomRendering={handleEventRender}
        />
      </Card>

      {/* Add event modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="dark-BG-101010">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#EDEFF5",
                borderRadius: "8px",
                padding: "20px 20px",
              }}
              className="bg-black"
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                 {isEditing ? t('editTitle'): t('add')}
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
                className="modal-close"
              >
                <ClearIcon />
              </IconButton>
            </Box>

            <Box
              className="client-box"
              component="form"
              noValidate={false}
              
              action={(formData) => {
      {isEditing && selectedEvent.start ?  formData.append('eventDate', selectedEvent.start?selectedEvent.start : ''):  formData.append('eventDate', value ? value.format() : '')}

                // formData.append('eventDate', value ? value.format() : '');
    
                if (isEditing) {
        

                  if (selectedEvent.groupId === 'Public') {
                    onUpdatePublic(formData, selectedEvent.id).then(() => {
                      handleClose();
                      successAlert(t('editSucess'));
                    });
                  } else {
          

                    onUpdate(formData, selectedEvent.id).then(() => {
                      handleClose();
                      successAlert(t('editSucess'));
      
      
                    });           
}
          
             
                } else {
              onCreate(formData).then(() => {
                handleClose();
                successAlert(t('success'));


              });   
                }
       
            }}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "20px 20px",
                  borderRadius: "8px",
                }}
                className="client-box"
              >
                <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
  <CustomTypography text={t('eventName')}/>

                    <TextField
   className="client-box"
    autoComplete="event-name"
    name="eventName"
    fullWidth
    id="eventName"
    label={t('eventName')}
    required
    autoFocus
    InputProps={{
      style: { borderRadius: 8 },
      className:"client-input"
    }}
    defaultValue={isEditing && selectedEvent.title ? selectedEvent.title : ''}
  />
</Grid>
                  {session?.UserRole=="ADMIN"?<Grid item xs={12} md={12} lg={12}>
                  <CustomTypography text={t('type')} />
                  <ValuesSelect name={"eventStatus"} values={statusValues} isrequired={true} dicName="agendaPage" optionValue={isEditing?selectedEvent.groupId:statusValues}/>
                </Grid>:null}
<Grid item xs={12} md={12} lg={12}>
  <CustomTypography text={t('date')} />

  <LocalizationProvider dateAdapter={AdapterDayjs} >
    <Stack className="date-time-picker">
      <DateTimePicker
        value={isEditing && selectedEvent.start ? dayjs(selectedEvent.start) : value}
                          onChange={handleChange}
                          className="client-input client-box"
                  
                          
      />
    </Stack>
  </LocalizationProvider>
</Grid>

                  <Grid item xs={12} textAlign="end">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 1,
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "13px",
                        padding: "12px 20px",
                        color: "#fff !important",
                        backgroundColor:'#040831'
                      }}
                    >
                      <AddIcon
                        sx={{
                          position: "relative",
                          top: "-2px",
                        }}
                        className="mr-5px"
                      />
                     {isEditing ? t('edit') : t('save')}
                    </Button>
                    {isEditing?         <Button
                      onClick={async () => {
                        handleClose();

                          await Swal.fire({
                            title: t('deleteTitle'),
                            text: t('deleteTitle2'),
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: t('yes'),
                            focusConfirm: true,
                            allowEscapeKey: true,
                            cancelButtonText:t('cancel')
                            
                          }).then((result) => {
                            if (result.isConfirmed && result.value === true) {
                              console.log(result)
                        {selectedEvent.groupId==='Public'?onDeletePublic(selectedEvent.id): onDelete(selectedEvent.id);}
                              Swal.fire(t('deleteSuccess'));
                            }
                          });
                        }}
                      variant="contained"
                      sx={{
                        backgroundColor: 'red',
                        paddingLeft:'15px',
                        mt: 1,
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "13px",
                        padding: "12px 20px",
                        color: "#fff !important",
                      }}
                    >
                      <AddIcon
                        sx={{
                          position: "relative",
                          top: "-2px",
                        }}
                        className="mr-5px"
                      />
                  {t('delete')}
                    </Button>:null}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CalendarComponent;
