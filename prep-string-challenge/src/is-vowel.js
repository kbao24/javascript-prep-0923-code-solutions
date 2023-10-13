/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  );
}
