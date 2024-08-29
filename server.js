const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

app.get('/toolbox/search', async (req, res) => {
    const query = req.query.query;
    try {
        const response = await axios.get(`https://api.robloxlabs.com/toolbox/search?query=${encodeURIComponent(query)}&apiKey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching tool data');
    }
});

app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});
