import ReviewForm from "./review-form";
export default function JourneyPage({ params }: { params: { id: string } }) {
  return (
    <div className="wrap">
      <h2>Journey • {params.id}</h2>
      <div className="panel">
        <div className="kpis">
          <div><strong>Avg rating:</strong> 4.1★</div>
          <div><strong>On-time today:</strong> 81%</div>
          <div><strong>Operator:</strong> Demo TOC</div>
        </div>
      </div>
      <ReviewForm journeyId={params.id} />
    </div>
  );
}
