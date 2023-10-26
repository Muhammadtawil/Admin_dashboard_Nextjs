import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";

const TestimonialsComponent = dynamic(
  () => import("../../../components/testimonials/testimonials"),
  {
    loading: () => <LoadingSpinner />, 
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function TestimonialsPage() {

  return <TestimonialsComponent />;
}
