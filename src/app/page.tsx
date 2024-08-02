import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageLogo from "/logo pacific 1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-dark-2">
      <div className="flex flex-col gap-5">
        <img src="/logo pacific 1.png" alt="" />

        <Link href="/dashboard">
          <p className="text-24-700 italic text-blue-1">
            Continue to Dashboard {">>"}
          </p>
        </Link>
      </div>
    </main>
  );
}
