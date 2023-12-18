// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// name            role                    image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

let personale = [
    {'name': 'Wayne Barnett',
     'role' : 'Founder e CEO',
     'image':'wayne-barnett-founder-ceo.jpg'
    },
    {'name': 'Angela Caroll',
    'role' : 'Chief Editor',
    'image':'angela-caroll-chief-editor.jpg'
    },
    {'name': 'Walter Gordon',
   'role' : 'Office Manager	',
   'image':'walter-gordon-office-manager.jpg'
    },
    {'name': 'Angela Lopez',
   'role' : 'Social Media Manager',
   'image':'angela-lopez-social-media-manager.jpg'
    },
    {'name': 'Scott Estrada',
   'role' : 'Developer',
   'image':'scott-estrada-developer.jpg'
    },
    {'name': 'Barbara Ramos',
   'role' : 'Graphic Designer',
   'image':'barbara-ramos-graphic-designer.jpg'
    },
];

console.log(personale)


for (let i = 0; i < personale.length; i++) {
    
    console.log(personale[i]['name'])
    console.log(personale[i]['role'])
    console.log('eccoci qui',personale[i]['image'])

    let box = document.getElementById('personal-card')

    let col = document.createElement('div');
    col.classList.add('col-4');
    box.append(col)

    let card = document.createElement('div');
    card.classList.add('card');
    col.append(card)

    let image = document.createElement('img');
    image.src = "./img/"+personale[i]['image'];
    card.append(image);
    console.log('img',image, typeof image)

    let title = document.createElement('h3');
    title.innerHTML = personale[i]['name'];
    card.append(title);

    let role = document.createElement('h2');
    role.innerHTML = personale[i]['role'];
    card.append(role);

}