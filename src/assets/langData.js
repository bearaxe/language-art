/* eslint-disable */
const rawData =
`English,1.452 billion
Mandarin Chinese(incl. Standard Chinese but excl. other varieties),1.118 billion
Hindi(excl. Urdu),602.2 million
Spanish,548.3 million
French,274.1 million
Modern Standard Arabic(excl. dialects),274.0 million
Bengali,272.7 million
Russian,258.2 million
Portuguese,257.7 million
Urdu(excl. Hindi),231.3 million
Indonesian(excl. Malay),199.0 million
Standard German,134.6 million
Japanese,125.4 million
Nigerian Pidgin,120.7 million
Marathi,99.1 million
Telugu,95.7 million
Turkish,88.1 million
Tamil,86.4 million
Yue Chinese(incl. Cantonese),85.6 million
Vietnamese,85.3 million
Tagalog[b],82.3 million
Wu Chinese(incl. Shanghainese),81.8 million
Korean,81.7 million
Iranian Persian(excl. Dari and Tajik),77.4 million
Hausa,77.1 million
Egyptian Spoken Arabic(excl. other Arabic dialects),74.8 million
Swahili,71.4 million
Javanese,68.3 million
Italian,67.9 million
Western Punjabi(excl. Eastern Punjabi),66.4 million
Kannada,64.0 million
Gujarati,62.0 million
Thai,60.7 million
Amharic,57.5 million
Bhojpuri,52.5 million
Eastern Punjabi(excl. Western Punjabi),51.7 million
Min Nan Chinese(incl. Hokkien),49.7 million
Jin Chinese,47.1 million
Yoruba,45.6 million
Hakka Chinese,44.1 million
Burmese,43.0 million
Sudanese Spoken Arabic,42.3 million
Polish,40.6 million
Algerian Spoken Arabic,40.3 million
Lingala,40.3 million`;

const dataLines = rawData.split('\n');
const dataDoubleArray = dataLines.map(el => el.split(','));
const dataJson = {}

dataDoubleArray.forEach(arr => {
  console.log(arr[1]);

  return dataJson[arr[0]] = milBilToNum(arr[1])
});

function milBilToNum(rawString) {
  const [numberString, quantityString] = rawString.split(' ');
  const MILLION = 1000000;
  const BILLION = 1000000000;
  return parseFloat(numberString) * (quantityString == 'million'? MILLION: BILLION);
}


// console.log(dataJson);
export default dataJson;