exports.receiveMessage = (req, res) => {
    const message = req.body.Body;
    const from = req.body.From;
    console.log(`Message from ${from}: ${message}`);
  
    res.send(`<Response><Message>Received: ${message}</Message></Response>`);
  };
  