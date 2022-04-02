import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'list', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/36783a395d86adbf9fcd4.mp4','https://telegra.ph/file/fe3325fb5fa3da1de4c04.mp4','https://telegra.ph/file/29a367457d46721b59528.mp4','https://telegra.ph/file/02c8cb90510ad6fd1e02d.mp4','https://telegra.ph/file/0e633bf979e25ef592c10.mp4','https://telegra.ph/file/0fde71c91c0e8813b754f.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Konnichiwa👋 ɪ ᴀᴍ 𝓜𝓪𝓻𝓲𝓷💖🖤
╭────────────
│シ︎ Usᴇʀ Nᴀᴍᴇ: *${M.sender.username}*
│シ︎ Bᴏᴛ Nᴀᴍᴇ: 𝕄𝔸ℝ𝕀ℕ 𝕜𝕒𝕥𝕒𝕘𝕒𝕨𝕒
│シ︎ Dᴇᴠʟᴏᴘᴇʀ: CHEY-SAN
│シ︎ Pʀᴇғɪx: ${this.client.config.prefix}
╰────────────┈マリン
ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀ!

ᴍʏ ᴘʀᴇғʀɪx ${this.client.config.prefix}

