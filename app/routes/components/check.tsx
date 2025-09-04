export default function Check({
  isBest,
  text,
}: {
  isBest: boolean;
  text: string;
}) {
  if (isBest) {
    return <p>{text}: ✅</p>;
  }
  return <p>{text}: ❌</p>;
}