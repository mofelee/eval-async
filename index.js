const fs = require('fs')

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

fs.readFile('./bot.js', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);

  const fn = new AsyncFunction('x', 'y', data)

  console.log(fn(1, 2))
});
