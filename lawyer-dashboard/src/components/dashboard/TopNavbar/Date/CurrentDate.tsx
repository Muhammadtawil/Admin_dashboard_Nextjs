"use client"
import { useState, useEffect } from "react";
import styles from "./CurrentDate.module.css";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

function CurrentDate() {
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale=useLocale()
  // Initialize a state variable to store the current date
  const [currentDate, setCurrentDate] = useState("");

  // Use the useEffect hook to fetch and format the current date when the component mounts
  useEffect(() => {
    // Define the formatting options for the date
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit", // Display the day as a two-digit number (e.g., 01, 02)
      month: "long", // Display the full month name (e.g., January)
      year: "numeric", // Display the full year (e.g., 2023)
    };

    // Create a new Intl.DateTimeFormat instance with the specified options
    const formatter = new Intl.DateTimeFormat(locale=="ar"?"ar-LB":"en-US", options);

    // Create a new Date instance to get the current date and time
    const date = new Date();

    // Format the current date using the formatter and update the state
    setCurrentDate(formatter.format(date));
  }, []); // The empty dependency array ensures this effect runs only once, on component mount

  return (
    <>
      {/* Render the formatted current date */}
      <div className={styles.currentDate}>
        <i className="ri-calendar-2-line"></i>
        {currentDate}
      </div>
    </>
  );
}

export default CurrentDate;
