// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() 
{
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!', 'こんにちは', 'Привет'];


  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  
  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}


function addRandomFact()
{
        const randomFacts = 
        ['My favorite video game franchises consist of Fallout, Monster Hunter, and Zelda',
         'I\'ve been coding for almost 6 years now.',
         'I work at a Dessert shop called Bahama Buck\'s. It\'s been an amazing 2 1/2 years so far there!',
         'I attend Arizona State University as a Software Engineering major',
         'My favorite music artist is Linkin Park',
         'I love to travel, and my next travel spots would be Japan, the UK, Spain, and France!',
         'I read alot. Enough that I decided to get a Barnes and Noble membership, which only fueled my want to go and browse for more books',
         'My favorite animal is the Hammerhead Shark. Why? Just for looks really. Always found its appearance interesting.',
         'Favorite gaming console? The Switch currently. Huge library of amazing games and completely portable.',
         'I am currently in the process of reviving my grandpa\'s 1974 Chevy Nova.',
         'My favorite book is Paulo Coelho\'s "The Alchemist".',
         'My favorite Star Wars character is Darth Vader.',
         'My favorite color is green, hence the background color!'
        ]

        const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

        const randomFactContainer = document.getElementById('randomFact-container');

        randomFactContainer.innerText = randomFact;

}
