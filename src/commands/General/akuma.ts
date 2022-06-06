import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'captain',
            description: 'Displays info about captain.',
            category: 'general',
            usage: `${client.config.prefix}akuma`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/a43f5a77aafa32083150a.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `💖heyo i'm Captain Puffy from India.In love with Miku Nakano.
            
💖𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/918945514787

💖𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈;
https://www.instagram.com/oh_its_minase

⪼Mata~nee💖💖` }
        )
    }
}
