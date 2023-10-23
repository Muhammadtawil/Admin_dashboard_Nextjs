import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const TestimonialsComponent = dynamic(
  () => import("../../../components/testimonials/testimonials"),
  {
    loading: () => <LoadingSpinner />, 
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function TestimonialsPage() {
  <PageTitle title="Testimonials" />;
  return <TestimonialsComponent />;
}
