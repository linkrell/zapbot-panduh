// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(Olá)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'Sou o assistente virtual. Como posso ajudá-lo hoje? Por favor, digite o número de uma das opções abaixo:\n\n1 - Como funciona\n2 - Valores\n3 - Conversar com um profissional'); //Primeira mensagem de texto
        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'O nosso produto foi feito justamente para quem não tem tempo para fazer exercícios e mesmo assim quer ter a saúde do corpo em dia.\n\nAlém disso, o pagamento é feito somente após você receber o produto!');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, ' Caso queira ajuda, nos diga abaixo e aguarde o suporte que logo retornaremos.');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Irei mandar o link da nossa página para você ter mais informações: https://linkrell.github.io/lipo-extremo/');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, '*1 POTE:* R$197,00 ou em até 12x\n\n*3 POTES* R$297,00 ou em até 12x');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Link para a compra: https://linkrell.github.io/lipo-extremo/');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Precisa de mais alguma ajuda?');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Certo! Em breve retornaremos!🥰');
        
        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Enquanto isso, dê uma olhada na nossa página: https://linkrell.github.io/lipo-extremo/');

    }








});