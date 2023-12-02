import LoadingSpinner from '@/components/dashboard/loading spinner/loadinSpinner';
import CalendarMain from '@/components/dashboard/todo/Calendar/calendar_main';

import dynamic from 'next/dynamic';


const CalendarComponent = dynamic(() => import("../../../../components/dashboard/todo/Calendar/calendar_component"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});


export default function CaledarPage() {
  return (
   <CalendarMain/>
  )
}
