const openMenu = document.getElementById('nav-menu');

function clickX() {
  openMenu.style.display = 'none';
}

const ham = document.querySelector('.ham');
ham.addEventListener('click', () => {
  openMenu.style.display = 'block';
});

const closeBtn = document.getElementById('btn-close');
closeBtn.addEventListener('click', clickX);

const dataCards = [
    {
      id: 1,
      image: './Image/exe-dean.jpg',
      name: 'Prof BB Mamba',
      title: 'Executive Dean College of Science Engineering & Technology',
      line: './Image/title-line.png',
      description: 'Specialising in Inorganic Chemistry, Nanostructured materials synthesis and water treatment',
    },
    {
      id: 2,
      image: './Image/Dr-Mark-Smith.jpg',
      name: 'Dr Mark Smith',
      title: 'Senior lecturer in the Department of Chemistry, CSET',
      line: './Image/title-line.png',
      description: 'Specialising in Supramolecular Chemistry, Structural Chemistry and Pharmaceutical drug design',
    },
    {
      id: 3,
      image: './Image/MketoN.jpg',
      name: 'Dr M Mketo',
      title: 'Department of Chemistry',
      line: './Image/title-line.png',
      description: 'Specialising in inorganic (heavy metals, non-metals and metalloids) and organic pollutants are a threats to living organisms',
    },
    {
      id: 4,
      image: './Image/Prof-Mantile-Lekala.jpg',
      name: 'Prof M Lekala',
      title: 'Department of Physics',
      line: './Image/title-line.png',
      description: 'Specialising in Theoretical Nuclear, Atomic and Molecular Physics and Computational Physics',
    },
    {
      id: 5,
      image: './Image/EevaRapoo.jpg',
      name: 'Prof E Rapoo',
      title: 'Chair of Statistics Department',
      line: './Image/title-line.png',
      description: 'Specialising in Stochastics, Mathematics and Statistics Education and numerical analysis.',
    },
    {
      id: 6,
      image: './Image/Gaetan Kabera.jpg',
      name: 'Prof G Kabera',
      title: 'Statistics Lecturer',
      line: './Image/title-line.png',
      description: 'Specialising in Optimal experimental Designs, Survival Analysis and Analytic Hierarchy Process.',
    },
  ];

  const showBtn = document.querySelector('.btnLect');
  const showMoreArray = Array.from(showMore);
  
  dataCards.forEach((card) => {
    const temp = document.createElement('div');
    temp.innerHTML = `
    <div class='showMoreCont hidden'>
    <div class='img1'><img class='pop-img' src=${card.image}></div>
    <div class='flex-txt'>
    <h4 class='dept'>${card.name}</h4>
    <p class='title'>${card.title}</p>
    <p class='descr'>${card.description}</p>
    </div>
    </div>
    `;
    showMore.append(temp);
  })

// const clicked = () => {
//     showMore.classList.remove('hidden');
//     showMore.classList.add('visible');
// }

// showBtn.addEventListener('click', clicked);

// const showMoreConts = document.getElementById('showMoreCont');
// // let showBtn = document.querySelector('.btnLect');
// for (let i = 0; i < showMoreConts.length; i += 1) {
//     showBtn.onclick = function showFeature() {
//       showMoreConts[i].style.visibility = 'visible';
//       showMoreConts[i].classList.remove('hidden');
//       showMoreConts[i].classList.add('visible');
//       showBtn.innerHTML = 'LESS';
//     };
//     showBtn.onclick = function lessFeature() {
//       showMoreConts[i].style.visibility = 'hidden';
//       showMoreConts[i].classList.remove('visible');
//       showMoreConts[i].classList.add('hidden');
//       showBtn.innerHTML = 'MORE';
//     };
//   }

const showMoreConts = document.querySelectorAll('.showMoreCont');
showBtn.addEventListener('click', () => {
for (let i = 0; i < showMoreConts.length; i += 1) {
    if (showBtn.innerHTML === 'MORE') {
      showMoreConts[i].classList.remove('hidden');
      showMoreConts[i].classList.add('visible');
      showBtn.innerHTML = 'LESS <img src="./Image/arrow_down.png" alt="">'
    } else {
      showMoreConts[i].classList.remove('visible');
      showMoreConts[i].classList.add('hidden');
      showBtn.innerHTML = 'MORE <img src="./Image/arrow_down.png" alt="">'
    } 
  }
  });