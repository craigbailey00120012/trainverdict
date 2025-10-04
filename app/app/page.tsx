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

      <section className="section">
        <h2>Trending journeys</h2>
        <div className="list">
          {[
            { route: "BTN → VIC", stars:"★★★★☆", tags:["Cleanliness 4.3","Comfort 3.9","Punctuality 3.6"]},
            { route: "MAN → LIV", stars:"★★★☆☆", tags:["Cleanliness 3.1","Comfort 3.4","Punctuality 2.8"]},
          ].map((r,i)=>(
            <div key={i} className="row">
              <div className="route">{r.route}</div>
              <div className="stars">{r.stars}</div>
              <div className="tags">{r.tags.map(t=> <span key={t} className="tag">{t}</span>)}</div>
              <Link href={`/journey/demo`} className="btn small">Open</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
