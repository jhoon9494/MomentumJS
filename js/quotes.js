const quotes = [
  { 
    quotes: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다."
  }, 
  { 
    quotes: "항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다."
  }, 
  { 
    quotes: "인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데."
  }, 
  { 
    quotes: "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다."
  }, 
  { 
    quotes: "오늘은 당신의 남은 인생 중, 첫 번째 날이다."
  }, 
  { 
    quotes: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다."
  }, 
  { 
    quotes: "별은 바라보는 자에게 빛을 준다."
  }, 
  { 
    quotes: "생명이 있는 한 희망이 있다. 실망을 친구로 삼을 것인가, 아니면 희망을 친구로 삼을 것인가."
  }, 
  { 
    quotes: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다."
  }, 
  { 
    quotes: "슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라. “이것 또한 지나가리라”"
  }
]
const quote = document.querySelector("#quote span")
const randomNumber = Math.floor(Math.random() * quotes.length);
// Math.round() = 반올림
// Math.ceil() = 올림
// Math.floor() = 내림

quote.innerText = quotes[randomNumber].quotes;