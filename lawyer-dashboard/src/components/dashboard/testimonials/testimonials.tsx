import React from "react";
import { revalidatePath } from "next/cache";
import AddTestimonials, {
  DeleteTestimonials,
  GetTestimonials,
  UpdateTestimonial,
} from "../../../server/testimonials/Testimonials";
import TestimonialAddComponent from "./testimonials_form";
import TestimonialsTable from "./testimonials_table";

export let isEdit: boolean;

async function onCreate(formData: FormData) {
  "use server";
  try {
    await AddTestimonials(formData);
    revalidatePath("/testimonials", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, testimonialId: string) {
  "use server";
  try {
    await UpdateTestimonial(formData, testimonialId);

    revalidatePath("/testimonials", "page");
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

async function Delete(testimonialsId: string) {
  "use server";
  try {
    await DeleteTestimonials(testimonialsId);
    revalidatePath("/testimonials", "page");
  } catch (error) {}
}

export default async function TestimonialsComponent() {
  const testimonials = await GetTestimonials();

  return (
    <>
      <TestimonialAddComponent onCreate={onCreate} />
      <TestimonialsTable
        deleteTestimonials={Delete}
        dataRows={testimonials}
        updateTestimonials={onUpdate}
      />
    </>
  );
}
