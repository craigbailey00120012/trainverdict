"use client";
import { useState } from "react";

export default function ReviewForm({ journeyId }: { journeyId: string }) {
  const [overall, setOverall] = useState(4);
  const [cleanliness, setCleanliness] = useState(4);
  const [seatComfort, setSeatComfort] = useState(4);
  const [rideComfort, setRideComfort] = useState(4);
  const [punctuality, setPunctuality] = useState(4);
  const [body, setBody] = useState("");

  async function submit(){
    const res = await fetch("/api/reviews", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        journeyId, overall, cleanliness, seatComfort, rideComfort, punctuality, body,
        travelDate: new Date().toISOString().slice(0,10)
      })
    });
    if (!res.ok) return alert("Failed to submit");
    alert("Review submitted — thank you!");
    setBody("");
  }

  const Slider = (p:{label:string; value:number; onChange:(n:number)=>void})=>(
    <label className="metric">
      <span>{p.label}: {p.value}</span>
      <input type="range" min="1" max="5" value={p.value} onChange={e=>p.onChange(Number(e.target.value))}/>
    </label>
  );

  return (
    <div className="panel">
      <h3>Write a review</h3>
      <Slider label="Overall" value={overall} onChange={setOverall} />
      <div className="grid">
        <Slider label="Cleanliness" value={cleanliness} onChange={setCleanliness} />
        <Slider label="Seat comfort" value={seatComfort} onChange={setSeatComfort} />
        <Slider label="Ride comfort" value={rideComfort} onChange={setRideComfort} />
        <Slider label="Punctuality" value={punctuality} onChange={setPunctuality} />
      </div>
      <textarea placeholder="Tell other commuters what it was like…" value={body} onChange={e=>setBody(e.target.value)} />
      <button className="btn" onClick={submit}>Submit review</button>
    </div>
  );
}
