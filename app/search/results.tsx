"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Results(){
  const sp = useSearchParams();
  const from = sp.get("from") || "";
  const to   = sp.get("to") || "";

  return (
    <div className="wrap">
      <h2>Results for {from} → {to}</h2>
      <div className="list">
        <div className="row">
          <div className="route">{from || "CLJ"} → {to || "LBG"}</div>
          <div className="stars">★★★★☆</div>
          <div className="tags">
            <span className="tag">Comfort 4.1</span>
            <span className="tag">Punctuality 3.7</span>
          </div>
          <Link href="/journey/demo" className="btn small">Open</Link>
        </div>
      </div>
    </div>
  );
}
