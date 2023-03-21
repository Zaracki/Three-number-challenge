const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}



function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while(optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button")
      button.innerText = option.text
      button.classList.add("button")
      button.addEventListener("click", () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1, 
    text: "You got out of the dungeon by solving a hard puzzle. Before you lies three weapons, choose the right one.",
    options: [
      {
        text: "Rock",
        setState: { rock: true},
        nextText: 2
      },
      {
        text: "Scissor",
        setState: { scissor: true},
        nextText: 2
      },
      {
        text: "Paper",
        setState: { paper: true},
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "You try to make your way back to town. Which way will you take?",
    options: [
      {
        text: "Stroll through the forest",
        nextText: 3
      },
      {
        text: "Climb the mountain",
        nextText: 4
      },
      {
        text: "Walk the dirt road",
        nextText: 5
      }
    ]
  },
  {
   id: 3,
    text: "The forest is full of vines and insects. What do you do?",
    options: [
      {
        text: "Go back to the dungeon",
        requiredState: (currentState) => currentState.scissor,
        nextText: 6
      },
      {
        text: "Try your luck running through the vines",
        nextText: 7
      },
      {
        text: "Use the scissor to cut the vines",
        requiredState: (currentState) => currentState.scissor,
          setState: {scissor: false},
        nextText: 8
       
      } 
    ] 
  },
  {
    id: 4,
    text: "You try to climb the mountain.",
    options: [
      {
        text: "Free climb the mountainside",
        nextText: 15
      },
      {
        text: "Walk the path along the edge",
        nextText: 16
      }
    ]
  },
  {
    id: 5,
     text: "While walking the road you get attacked by a lonely bandit.",
     options: [
       {
         text: "Knock him down with your stone",
         requiredState: (currentState) => currentState.rock,
         setState: {rock: false},
         nextText: 11
       },
       {
         text: "Run away",
         nextText: 12
       },
       {
         text: "Try to talk him into letting you go",
         nextText: 13
       } 
     ] 
   },
  {
    id: 6,
     text: "Well.. you went back to the dungeon. What would you like to do now? (The paper blew away)",
     options: [
       {
         text: "Go inside",
         nextText: 666
       },
       {
         text: "Take rock",
         setState: { rock: true},
         nextText: 9
       }
     ] 
   },
   {
    id: 7,
     text: "You run throught the vines at full speed, only to get yourself entangled. While you struggle to get loose, a band of vile monkeys jumps of a tree and attack.",
     options: [
       {
         text: "Restart",
         nextText: -1
       }
     ] 
   },
   {
    id: 8,
     text: "You cut your way through the vines and your scissor break. On your way back you get jumped by a band of vile monkeys.",
     options: [
       {
         text: "Restart",
         nextText: -1
       }
     ] 
   },
   {
    id: 9,
    text: "You are back trying to figure out which way to take..",
    options: [
      {
        text: "Stroll through the forest",
        nextText: 10
      },
      {
        text: "Climb the mountain",
        nextText: 4
      },
      {
        text: "Walk the dirt road",
        nextText: 5
      }
    ]
  },
  {
    id: 10,
     text: "The forest is STILL full of vines and insects. What do you do?",
     options: [
       {
         text: "Try your luck running through the vines",
         nextText: 7
       },
       {
         text: "Use the scissor to cut the vines",
         requiredState: (currentState) => currentState.scissor,
           setState: {scissor: false},
         nextText: 8
        
       } 
     ] 
   },
   {
    id: 11,
     text: "Along the road you meet a merchant.",
     options: [
      {
        text: "Attack the merchant",
        nextText: 0
      },
      {
        text: "Walk by",
        nextText: 14
      },
      {
        text: "Try to steal",
        nextText: 0
      },
      {
        text: "Trade your scissor for a unknown potion",
        requiredState: (currentState) => currentState.scissor,
        setState: {scissor: false, potion: true},
        nextText: 14
      }
     ] 
   },
   {
    id: 12,
     text: "You while you run away rom the bandit you fall down a trap and are impaled on spikes.",
     options: [
       {
         text: "Restart",
         nextText: -1
       }
     ] 
   },
   {
    id: 13,
     text: "Talking with the bandit you learn that his name is Greg. Greg tells you to go before the others come. When you turn your back he stabs you.",
     options: [
       {
         text: "Restart",
         nextText: -1
       }
     ] 
   },
   {
    id: 14,
     text: "The bandit gang is out for revenge and attacks!",
     options: [
      {
        text: "Stand you ground",
        nextText: 0
      },
      {
        text: "Run",
        nextText: 0
      },
      {
        text: "Try to steal",
        nextText: 0
      },
      {
        text: "Drink the potion",
        requiredState: (currentState) => currentState.potion,
        setState: {potion: false},
        
        nextText: 0
      }
     ] 
   },
   {
    id: 15,
     text: "You lose your grip and fall to your death.",
     options: [
      {
        text: "Restart",
        nextText: -1
      }
    ] 
  },
  {
    id: 16,
     text: "You try to walk along the path sticking close to the wall. But a big gust of wind makes you fall down to your death. (Why would you choose this?)",
     options: [
      {
        text: "Restart",
        nextText: -1
      }
    ] 
  },
   
  

]

startGame()