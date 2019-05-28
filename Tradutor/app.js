var api = "AIzaSyDy67QtV_MsfN-elsmVyXjSSPHL4xRFbc0";
var googleTranslate = require('google-translate')(api);

var text = 'Traduzindo para o ingles'
console.log("Portugues :>",text);
googleTranslate.translate(text, 'en', function(err, translation) {
  console.log("Ingles :>",translation.translatedText);
});