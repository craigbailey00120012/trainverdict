import { Suspense } from "react";
import Results from "./results";
export default function SearchPage() {
  return <Suspense fallback={<div className="muted">Searching…</div>}><Results/></Suspense>;
}
