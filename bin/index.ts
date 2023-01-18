#!/usr/bin/env -S npx ts-node-esm
import { Command } from "commander";
import chalk from "chalk";
import clipboard from "clipboardy";
import createPassword from "../utils/createPassword.js";

const program = new Command();

program.version("1.0.0").description("简单的密码生成器");
program
	.option("-l --length <number>", "密码长度", "8")
	.option("-nn --no-numbers", "不需要数字")
	.option("-ns --no-symbols", "不需要符号")
	.parse();

interface OptionsItem {
	length: string;
	numbers: boolean;
	symbols: boolean;
}

const { length, numbers, symbols } = program.opts() as OptionsItem;

const len = Number(length);
const password = createPassword(len, numbers, symbols);

// 打印密码
console.log(
	chalk.green("Generated Password: ") +
		chalk.bold(password) +
		"\n" +
		chalk.whiteBright("-------------------------------------")
);
clipboard.writeSync(password);
console.log(chalk.bgBlue("Password copied to clipboardy!!"));
