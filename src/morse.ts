export const MORSE_CODE: { [key: string]: string } = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

type MorseResult = {
  output: string;
  warning: string | null;
};

export function decodeMorse(input: string): MorseResult {
  let warningMessage: string | null = null;
  const invalidChars = input.match(/[^.\- ]/g);
  if (invalidChars) {
    const uniqueChars = [...new Set(invalidChars)].join(", ");
    warningMessage = `Invalid characters detected: ${uniqueChars}`;
  }
  const inputTrimmed = input.trim();
  const normalizeNewLine = inputTrimmed.replace(/\n/g, "   ");
  const words = normalizeNewLine.split("   ");
  const decodedWords = words.map((word) => {
    const letters = word.split(" ").filter((token) => token.length > 0);
    const decodedLetters = letters.map((token) => {
      // Any token not found in the map (including those
      // with invalid characters) is converted to '?'.
      return MORSE_CODE[token] ?? "?";
    });
    return decodedLetters.join("");
  });
  const decodedOutput = decodedWords.join(" ");
  return {
    output: decodedOutput,
    warning: warningMessage,
  };
}
