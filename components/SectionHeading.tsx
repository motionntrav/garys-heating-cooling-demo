export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="mb-2 text-sm font-semibold tracking-wide text-brand-red-500">{eyebrow}</div>
      ) : null}
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-body">{subtitle}</p> : null}
    </div>
  );
}
