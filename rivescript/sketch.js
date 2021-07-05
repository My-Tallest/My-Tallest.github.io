function setup() {
  noCanvas();

  let bot = new RiveScript();
  bot.loadFile('bot.txt', brainReady, brainError);
  let writer = createWriter('newFile.txt');

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
    let backtiny = 0;
    console.log(backtiny);
    let reply = bot.reply('local-user', 'set ' + backtiny);
  }

  function brainError() {
    console.log('Chatbot error!');
  }

  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    let reply = bot.reply('local-user', input);
    output.html(reply);
    writer.write(reply);
    writer.write("\n");
  }

    let download = select('#save');

  download.mousePressed(createFile);
  
function createFile() {
  writer.close();
}
}