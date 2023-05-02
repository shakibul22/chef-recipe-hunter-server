const express = require('express')
const cors=require("cors");

const app = express();
app.use(cors());
const port =process.env.PORT || 5000;

const detailsData=require("./data.json");
const details=require("./details.json");

app.get('/', (req, res) => {
  res.json('chef recipe hunter server side is running')
})
app.get('/allData', (req, res) => {
  res.send(detailsData);
})
app.get('/details', (req, res) => {
  res.send(details);
})


app.listen(port, () => {
  console.log(`chef recipe hunter server side is running on port  ${port}`)
})