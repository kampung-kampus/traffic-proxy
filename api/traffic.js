export default async function handler(req, res) {
  try {
    const response = await fetch('https://datamall.lta.gov.sg/v1/transport/TrafficSpeedBands', {
      headers: {
        AccountKey: process.env.LTA_API_KEY,
        accept: 'application/json'
      }
    });

    const data = await response.json();

    // Allow your frontend to call this
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy failed', details: String(err) });
  }
}
