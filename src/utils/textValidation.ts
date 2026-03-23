/**
 * Utility to detect gibberish, spam, or keyboard mashing in text inputs.
 * Returns true if the text matches typical spam patterns.
 */
export function isGibberish(text: string): boolean {
  if (!text || text.trim().length === 0) return true;
  
  const normalized = text.toLowerCase().trim();

  // 1. Blacklist exact match or starts with/includes filler phrases
  const blacklist = ["test", "prueba", "lorem", "ipsum", "lorem ipsum", "nada", "nose", "no se", "no lo se", "123456", "asdf", "qwerty"];
  
  // Strict match for short inputs
  if (blacklist.includes(normalized)) return true;
  
  // Word match for longer inputs
  if (blacklist.some(word => normalized === word || normalized.startsWith(word + " ") || normalized.endsWith(" " + word) || normalized.includes(" " + word + " "))) {
    return true;
  }

  // 2. Repeated characters (e.g., 'aaaaa', 'ssssss')
  // 4 or more of the exact same character in a row
  if (/(.)\1{4,}/.test(normalized)) return true;

  // 3. Common keyboard mashing patterns
  const mashingPatterns = ["asdf", "qwerty", "zxcv", "qwer", "hjkl", "jklñ", "uiop", "vbnm", "dfgh", "zxcvbn"];
  if (mashingPatterns.some(pattern => normalized.includes(pattern))) return true;

  // Extract letters only to analyze valid language structure
  const lettersOnly = normalized.replace(/[^a-zñáéíóúü]/gi, "");
  if (lettersOnly.length === 0) return false; // If they only typed numbers/symbols, let specific field validators handle it (e.g. phone)

  // 4. Missing vowels in a text longer than 5 letters
  const vowels = /[aeiouyáéíóúü]/i;
  if (lettersOnly.length > 5 && !vowels.test(lettersOnly)) {
    return true;
  }

  // 5. Lack of spaces in a long string (if length > 22 and no spaces, it's a random continuous block)
  if (normalized.length > 22 && !normalized.includes(" ")) {
    return true;
  }

  // 6. Extreme consonant-to-vowel ratio
  if (lettersOnly.length > 10) {
    const vowelCount = (lettersOnly.match(/[aeiouyáéíóúü]/gi) || []).length;
    const consonantCount = lettersOnly.length - vowelCount;
    // E.g., 18 consonants and 1 vowel is definitely keyboard mashing
    if (consonantCount > vowelCount * 6) return true;
  }

  return false;
}
