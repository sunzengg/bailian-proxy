const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/bailian', async (req, res) => {
  try {
    const response = await axios.post(
      'https://dashscope.aliyuncs.com/api/v1/services/aigc/image-enhance/gfpgan/generate',
      {
        input: { image_url: req.query.image_url },
        model: 'gfpgan'
      },
      { headers: { 
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));