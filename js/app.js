//Creare un array di oggetti per rappresentare i membri del team

// 1 - creo l'array di oggetti
const membersInfo = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
]

// console.log(teamMember);
const containerElement = document.querySelector('.container');

// 2 - stampo su console per ogni membro il nome, ruolo e la stringa della foto
// creo un ciclo che mi iteri tutti gli elementi dell'array
for (let i = 0; i < membersInfo.length; i++) {
    
    const teamMembersName = membersInfo[i].name;
    const teamMembersRole = membersInfo[i].role;
    const teamMembersPhoto = membersInfo[i].photo;
    // console.log('Il nome del membro è: ' + teamMembersName + ',', 'il suo ruolo è: ' + teamMembersRole + ',',teamMembersPhoto);

    // 3 - stampo tutto sul dom
    containerElement.innerHTML += `
        <div class="card">
                <img src="./img/${teamMembersPhoto}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${teamMembersName}</h5>
                <p class="card-text">${teamMembersRole}</p>
            </div>
        </div>
    `
}



