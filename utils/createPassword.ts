const alpha: string = "qwertyuiopasdfghjklzxcvbnm";
const numbers: string = "0123456789";
const symbols: string = "!@#$%^&*_-=+";

function createPassword(
  length: number = 8,
  hasNumbers: boolean = true,
  hasSymbols: boolean = true
): string {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  return generatePassword(length, chars);
}

function generatePassword(length: number, chars: string): string {
  let password: string = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars.charAt(index);
  }
  return password;
}

export default createPassword;
