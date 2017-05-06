const e = require('eris')
const os = require('os')

// Please edit config.json with your token.
const conf = JSON.parse(require('fs').readFileSync('config.json', 'utf8'))

// You may change this desc, the owner, and prefix.
const bot = new e.CommandClient(conf.token, {}, {
  description: conf.desc,
  owner: conf.owner,
  prefix: conf.prefix
})

bot.on('ready', () => {
  console.log('dbot - discord responded with ready')
})

bot.registerCommand('about', 'my name is dbot and I live in `' + os.hostname() + '` https://github.com/xshotD/dbot', {
  description: 'who am I? run this to find out',
  fullDescription: ':thinking:'
})

bot.registerCommand('generic', 'generic sucks', {
  description: 'what is generic',
  fullDescription: 'lmao im gonan die'
})

bot.on('messageCreate', (msg) => {
  if (msg.content === conf.prefix + 'shutdown') {
    if (msg.author === conf.owner) {
      bot.createMessage(msg.channel.id, 'ok bye')
      process.exit(1)
    } else {
      bot.createMessage(msg.channel.id, 'no')
    }
  }
}
)
bot.connect()
