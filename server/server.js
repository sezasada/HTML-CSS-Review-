const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.post(bodyParser.urlencoded({ extended: true }))

const PORT = 5000;

app.use(express.static('server/public'));

app.get('/displayrev/:company', (req, res) => {
    let revenue;
    let peRatio;
    let guidance;

    let company = req.params.company;
    if (company.toLowerCase() === 'apple') {
        revenue = '90.15B';
        peRatio = 21.5358;
        guidance = "This quarter’s results reflect Apple’s commitment to our customers, to the pursuit of innovation, and to leaving the world better than we found it. As we head into the holiday season with our most powerful lineup ever, we are leading with our values in every action we take and every decision we make. We are deeply committed to protecting the environment, to securing user privacy, to strengthening accessibility, and to creating products and services that can unlock humanity’s full creative potential. Our record September quarter results continue to demonstrate our ability to execute effectively in spite of a challenging and volatile macroeconomicbackdrop. We continued to invest in our long-term growth plans, generated over $24 billion in operating cash flow, and returned over $29 billion to our shareholders during the quarter. The strength of our ecosystem, unmatched customer loyalty, and record sales spurred our active installed base of devices to a new all-time high. This quarter capped another record-breaking year for Apple, with revenue growing over $28 billion and operating cash flow up $18 billion versus last year.";
        res.json({ revenue, peRatio, guidance });
    } else {
        res.json({ error: "Invalid company name" });
    }
});
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
