module.exports = class Google {

    static match (message) {
       if (message.content.startsWith('!énigme1')) {
           let args = message.content.split (' ')
           args.shift()
           message.reply('1er chiffre du code:'))
           message.reply('vrai/faux: il existe des jeux pokémon PEGI 18 (vrai=1, faux=0')
       }
       if (message.content.startsWith('!énigme2')) {
           let args = message.content.split (' ')
           args.shift()
           message.reply('2ème chiifre du code')
           message.reply('второе число - два')
       }
       if (message.content.startsWith('!énigme3')) {
           let args = message.content.split(' ')
           args.shift()
           message.reply('3ème chiifre du code'))
           message.reply('((3i)**2)*((i**i)**2i)= ?'))
       }
       
    }


}