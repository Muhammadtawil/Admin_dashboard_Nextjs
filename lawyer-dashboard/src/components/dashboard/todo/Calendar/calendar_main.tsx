import AddEvents, { DeleteEvents, DeletePublicEvents, GetEvents, GetPublicEvents, UpdateEvent, UpdatePublicEvent } from "@/server/events/events";
import CalendarComponent from "./calendar_component";
import dayjs from "dayjs";
import { revalidatePath } from "next/cache";


async function onCreate(formData: FormData) {
    "use server";
      await AddEvents(formData);
      revalidatePath('calendar','page')
   
  }
  
  async function onUpdate(formData: FormData, eventId: string) {
    "use server";
    try {
      await UpdateEvent(formData, eventId);
    revalidatePath('calendar','page')
  
    } catch (error) {}
  }

  async function onUpdatePublic(formData: FormData, eventId: string) {
    "use server";
    try {
      await UpdatePublicEvent(formData, eventId);
    revalidatePath('calendar','page')
  
    } catch (error) {}
  }

  async function Delete(eventId: string) {
    "use server";
    try {
      await DeleteEvents(eventId);
      revalidatePath('calendar','page')
    } catch (error) {}
  }
  async function DeletePublic(eventId: string) {
    "use server";
    try {
      await DeletePublicEvents(eventId);
      revalidatePath('calendar','page')
    } catch (error) {}
  }
export default async function CalendarMain() {
    const events = await GetEvents();
    const publicEvents=await GetPublicEvents()

    // Combine events and publicEvents
    const allEventsData = [...events, ...publicEvents];


    // Transform the eventsData to match the EventApi format
    const formatedEvents = allEventsData.map((event:any) => ({
      id: event.eventId,
      title: event.eventTitle,
      start: new  Date(event.eventDate),
        end: event.eventDate ? dayjs(event.eventDate).toISOString() : null, // End date from 'eventDate'
        groupId: event.eventStatus,
      
    }));
  return (
      <CalendarComponent events={formatedEvents} onCreate={onCreate} onUpdate={onUpdate} onDelete={Delete } onUpdatePublic={onUpdatePublic} onDeletePublic={DeletePublic }/>
  )
}
