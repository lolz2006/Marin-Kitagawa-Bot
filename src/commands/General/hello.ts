/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			handler.customPrefix = /Hello|Heya|hlo/i
handler.command = new RegExp

		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://file.io/IRBw8kseK4jM'
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.audio,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.audio,
				caption: `hello senpai ❣️. \n`,
			}
		);
	};
}
