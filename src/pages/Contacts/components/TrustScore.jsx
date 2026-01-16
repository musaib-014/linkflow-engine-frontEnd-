function TrustScore({ value }) {
  let color = "red";
  if (value >= 80) color = "green";
  else if (value >= 50) color = "orange";

  return <span style={{ color, fontWeight: "bold" }}>{value}</span>;
}

export default TrustScore;
