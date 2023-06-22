const releases = [
    'Last DI release \n22/Jun/23',
    'Longing for Turquoise Jupiter \n25/May/23',
    'Triangular Daisies on the Balcony \n11/May/23',
    'Kiwi in the Alps \n27/Apr/23',
    'Happy Butterfly \n13/Apr/23',
    'Syrian Elephant Rider 🐘 \n30/Mar/23',
    'Dark Windy Cardio \n16/Feb/23',
    'Astringent Turmeric \n02/Feb/23',
    'Sweet laundry rope \n20/Jan/23',
    'Sweet sticky notes \n22/Dec/22',
    'Playful Coal \n08/Dec/22',
    'Bordeaux Pickled Tomato 🍅 \n24/Nov/22',
    'Rough Tomato 🍅 \n10/Nov/22',
    'Kheery Moon \n27/Oct/22',
    'Curious Starfruit \n13/Oct/22',
    'Shining Grapes \n29/Sep/22',
    'Sloth 🦥 \n19/Sep/22',
    'Maulwurf ⛏️ \n01/Sep/22',
    'High Sea Urchin \n18/Aug/22',
    'Seehund 🦭 \n04/Aug/22',
    'Purple Capybara \n07/Jul/22',
    'Alpaca 🦙 \n27/Jun/22',
    'Chicken 🐓 \n09/Jun/22',
    'Shark 🦈 \n30/May/22',
    'Bruno problem bear 🐻 \n12/May/22',
    'Easter bunny 🐰 \n14/Apr/22',
    'Caracal 🐈  \n31/Mar/22',
    'Dolphin 🐬 \n17/Mar/22',
    'Leaves on my balcony 🍂 \n17/Feb/22',
    'Porcupine 🦔 \n03/Feb/22',
    'Peacock 🦚 \n20/Jan/22',
    'Monitor-Lizard \n09/Dec/21',
    'Reindeer 🎄🎅🤶\n25/Nov/21'
].reverse();

const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < releases.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    const img = document.createElement('img');
    img.setAttribute('src', 'img/' + i + '.png');
    
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerText = releases[i];

    tile.appendChild(img);
    middle.appendChild(text);
    tile.appendChild(middle);
    container.appendChild(tile);
}

document.body.appendChild(container);