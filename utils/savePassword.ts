import { writeFile } from "node:fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function savePassword(password: string): void {
  const curFilePath = path.join(__dirname, "../", "passwords.txt");
  writeFile(curFilePath, password, "utf-8", (err) => {
    console.log(chalk.bgCyan("The password has saved to passwords.txt"));
  });
}
