export default function handler(req, res) {
//   const apiKey = process.env.X_API_KEY;

//   if (!apiKey) {
//     return res.status(500).json({ error: 'API key not found' });
//   }

  // Example logic using the API key
  if (req.method === 'POST') {
    // Handle POST request
    const data = req.body;

    // Use the apiKey for an external API request or internal logic
    // For example:
    // const response = await fetch('https://external-api.com/resource', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });

    // Send a response back to the client
    res.status(200).json({ message: 'Request handled successfully', ...data });
  } else {
    // Handle other request methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
