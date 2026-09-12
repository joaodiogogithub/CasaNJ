"use client";

import { useState } from "react";
import styles from "./Css/Whats.module.css";
import Link from "next/link";

export default function WhatsappButton() {
  return (
    <Link href="https://wa.me/+5516991282357" target="_blank" className={styles.whatsappButton}>
        <img src="/assets/zap.webp" alt="WhatsApp" width={60} height={60} />
    </Link>
  );
}