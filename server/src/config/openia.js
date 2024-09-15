const OpenAI = require("openai");

module.exports = class openai {
    static configuration() {
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    static textCompletion({prompt}) {
        return {
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
          }
    }
}