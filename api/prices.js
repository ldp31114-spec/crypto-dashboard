export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const ids = req.query.ids || 'bitcoin,ethereum,solana,sui';
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_sparkline=true`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
