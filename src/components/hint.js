import React from 'react'
import OpenAI from 'openai';
const apikey = process.env.REACT_APP_API_KEY

const openai = new OpenAI({
  apiKey: apikey,
  dangerouslyAllowBrowser: true,
});

const getHint = async (question) => {
  console.log(`Getting a hint about this question: ${question}`);
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `Can you give me a hint for this question? ${question}`}],
  });
  console.log(chatCompletion.choices[0].message.content);
}

const Hint = (props) => {

  return (
    <div>
      <button onClick={() => getHint(props.question)}>Get hint!</button>
    </div>
  )
}

export default Hint
