import OpenAI from 'openai';
const apikey = process.env.REACT_APP_API_KEY

const openai = new OpenAI({
  apiKey: apikey,
  dangerouslyAllowBrowser: true,
});

const getHint = async (question, answers) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `Without giving me the answer, give me a short hint for this question: ${question}. These are the possible answers: ${answers}.`}],
  });
  console.log(chatCompletion.choices[0].message.content);
  return chatCompletion.choices[0].message.content
}

export default getHint;
