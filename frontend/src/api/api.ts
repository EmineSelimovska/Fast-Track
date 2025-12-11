const url = "http://localhost:3000";

export async function fetchOverview() {
  const res = await fetch(`${url}/overview`);
  return res.json();
}

export async function fetchInsights() {
  const res = await fetch(`${url}/insights`);
  return res.json();
}
