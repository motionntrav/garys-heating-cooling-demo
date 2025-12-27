import { Card } from "./Card";

export function TestimonialCard({
  quote,
  name,
  location
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <Card className="h-full">
      <p className="text-sm text-body">“{quote}”</p>
      <div className="mt-4 text-sm">
        <div className="font-semibold text-ink">{name}</div>
        <div className="text-body">{location}</div>
      </div>
    </Card>
  );
}
