require("dotenv").config()
const cohere = require("cohere")
console.log(process.env.COHERE_AIP_KEY);
cohere.Client(process.env.COHERE_AIP_KEY)

const generator = async({product, keywords}) => {
  console.log(product, keywords);
  // const response = await cohere.generate({
  //   // model: "xlarge",
  //   // prompt: `Given a product and keywords, this program will generate exciting product descriptions. Here are some examples:\n\nProduct: Monitor\nKeywords: curved, gaming\nExciting Product Description: When it comes to serious gaming, every moment counts. This curved gaming monitor delivers the unprecedented immersion you need to play your best.\n--\nProduct: Surfboard\nKeywords: 6”, matte finish\nExciting Product Description: This 6” surfboard is designed for fun. It\'s a board that almost anyone can pick up, ride, and get psyched on.\n--\nProduct: ${product}\nKeywords: ${keywords}\nExciting Product Description:`,
  //   // max_tokens: 50,
  //   // temperature: 0.8,
  //   // k: 0,
  //   // p: 1,
  //   // frequency_penalty: 0,
  //   // presence_penalty: 0,
  //   // stop_sequences: ["--"],
  //   // return_likelihoods: "NONE",
  // });
  const response = await cohere.generate({
    model: "large",
    prompt: "Once upon a time in a magical land called",
    max_tokens: 50,
    temperature: 1,
  });
  return response.body.generations[0].text;
}
module.exports = generator