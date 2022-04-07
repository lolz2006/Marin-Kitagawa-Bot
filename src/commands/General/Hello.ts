/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "alive",
                        aliases: ["hello", "hii", "yo"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://telegra.ph/file/5ab4ac77b1b92a97b6fca.mp4','https://telegra.ph/file/e5f34a5d4427a247a0243.mp4';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Hey🍭 hey🍭 , *Hello👋 @${m.sender.split`@`[0]}_\n\n_senpai❣️ How are you😊 \n`,
			}
		);
	};
}
