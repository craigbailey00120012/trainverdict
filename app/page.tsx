"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <main className="wrap">
      <section className="hero">
        <h1>Review your daily <span className="grad">train commute</span>.</h1>
        <p>Search a journey, see real passenger scores, and add your own review.</p>
        <div className="searchbar">
          <input placeholder="From (e.g. CLJ)" value={from} onChange={e=>setFrom(e.target.value)} />
          <input placeholder="To (e.g. LBG)" value={to} onChange={e=>setTo(e.target.value)} />
          <Link href={`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`} className="btn">Find journeys</Link>
        </div>
      </section>
    </main>
  );
}
