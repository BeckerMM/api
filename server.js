const openaiapi = require('openai');

const express = require('express');
const path = require('path');



const app = express();
const port = process.env.PORT || 8082;

// sendFile will go here
app.get('/', function(requisicao, resposta) {
  resposta.status(200).json("testando api");
});

app.post('/',async (requisicao, resposta)=>{
try{
    let message = requisicao.body
    const configuration = new openaiapi.Configuration({
        apiKey: "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",
      });
      const openai = new openaiapi.OpenAIApi(configuration);
      
      const chatCompletion = await openai.createChatCompletion({
        model: "text-davinci-003",
        messages: [{role: "user", content: "Hello world"}],
      });

      resposta.status(200).json(chatCompletion.data.choices[0].message);
    }catch (error) {
        console.error('Erro ao enviar a mensagem para o ChatGPT:', error);
      resposta.status(400).json(error);
      }
    })

app.listen(port);
console.log('Server started at http://localhost:' + port);