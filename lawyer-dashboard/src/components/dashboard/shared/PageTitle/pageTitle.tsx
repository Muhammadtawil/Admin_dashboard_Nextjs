import Link from "next/link";
import React from "react";
import styles from "../../../../styles/PageTitle.module.css";
export default function PageTitle({ title }: { title: string }) {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>{title}</li>
      </ul>
    </div>
  );
}
