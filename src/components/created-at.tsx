export default function CreatedAt({ value }: { value: Date }) {
  return (
    <p className="at">
      <b>Created at:</b> {value.toLocaleString()}
    </p>
  );
}
