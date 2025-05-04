
const words = [
    "hello",
    "world",
    "JavaScript",
    "GPT",
    "awesome",
    "code",
    "functionality",
    "fun",
    "magic"
  ];
  
  function filterLongWords(arr) {
    return arr.filter(word => word.length > 5);
  }
  
  console.log("სრული სიტყვები:", words);
  console.log( "> 5 სიმბოლო:", filterLongWords(words));