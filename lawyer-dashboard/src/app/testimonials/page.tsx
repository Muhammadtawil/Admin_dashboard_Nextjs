import PageTitle from "@/components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const TestimonialsComponent = dynamic(
  () => import("@/components/testimonials/testimonials"),
  {
    loading: () => <p>Loading...</p>, // Optional loading component
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function TestimonialsPage() {
  <PageTitle title="Testimonials" />;
  return <TestimonialsComponent />;
}
