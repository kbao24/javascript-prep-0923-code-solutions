/* exported getWords */
function getWords(string) {
  const wordArray = string.split(' ');
  const filteredWordsArray = wordArray.filter((word) => word.trim() !== '');

  return filteredWordsArray;
}
