function shout(string){
  return string.toUpperCase()
}

function whisper(s){
  return s.toLowerCase()
}

function logWhisper(s){
  console.log(s.toLowerCase())
}

function sayHiToGrandma(s){
  if(s == "I love you, Grandma.") {
    return "I love you, too."
  }
  if(s == s.toUperCase()){
     return "YES INDEED!"
  }else{
    return "I can't hear you!"
  }
}
