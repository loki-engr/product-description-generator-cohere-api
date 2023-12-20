const express = require("express")
const router = express.Router()

const generator = require("../lib/description-generator")
router.post("/", async (req, res) => {
  console.log(333);
  console.log(req.headers);
  console.log(req.body);
  const {product, keywords} = req.body
  console.log(product, keywords);
  const description = await generator({product, keywords})
  res.send(description.slice(0, -3))
})

module.exports = router