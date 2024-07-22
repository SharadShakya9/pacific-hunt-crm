import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen bg-light-2">
      <Link href="/dashboard">
        <p>Continue to Dashboard</p>
      </Link>
    </main>
  );
}
