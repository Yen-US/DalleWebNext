const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function createImage(prompt: string, size:string = "512x512", n:number = 1) {
    const response = await openai.createImage({
        prompt: prompt,
        n: size,
        size: n,
      });
      const generated = response.data.data[0];

    return generated

}

