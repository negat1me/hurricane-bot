const { Bot } = require('gramio');
const bot = new Bot('8167522631:AAG8utL2gGswsLzRE0ntY4jnWjzW_UXQIr4').command('start', (ctx) => ctx.send('Здарова'))

let hurricaneMain = [];
let hurricaneReserve = [];
const admins = [416914933, 747635928]

bot.command('hurricane', (ctx) => {
    ctx.send('РОТА ПІДЬЙОМ', {
        "chat_id": -4636218525,
        "text": hurricaneMain.join(', '),
        "parse_mode": "MarkdownV2"
    })
})

bot.command('hurricanсhiki', (ctx) => {
    ctx.send('РОТА ПІДЬЙОМ', {
        "chat_id": -4636218525,
        "text": hurricaneMain.join(', ') + 'КС НАХУЙ',
        "parse_mode": "MarkdownV2"
    })
})


bot.on('message', async (ctx) => {
    const text = ctx.text;

    if (typeof text === 'string' && text.includes('/setMain') && admins.includes(ctx.senderId)) {
        const [_, ...ids] = text.split(' ');
        hurricaneMain = ids;
    } else if (typeof text === 'string' && text.includes('/setMini') && admins.includes(ctx.senderId)) {
        const [_, ...ids] = text.split(' ');
        hurricaneReserve = ids;
    } else if (typeof text === 'string' && text.includes('/setMain') && !admins.includes(ctx.senderId)) {
        await ctx.reply('Ти не маєш прав на цю команду, другими словами - іди нахуй');
    }
})


bot.start();