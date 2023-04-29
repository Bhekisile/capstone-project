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
    line: './Image/title_dbar.png',
    description: 'Specialising in Inorganic Chemistry, Nanostructured materials synthesis and water treatment',
  },
  {
    id: 2,
    image: './Image/Dr-Mark-Smith.jpg',
    name: 'Dr Mark Smith',
    title: 'Senior lecturer in the Department of Chemistry, CSET',
    line: './Image/title_dbar.png',
    description: 'Specialising in Supramolecular Chemistry, Structural Chemistry and Pharmaceutical drug design',
  },
  {
    id: 3,
    image: './Image/MketoN.jpg',
    name: 'Dr M Mketo',
    title: 'Department of Chemistry',
    line: './Image/title_dbar.png',
    description: 'Specialising in inorganic (heavy metals, non-metals and metalloids) and organic pollutants are a threats to living organisms',
  },
  {
    id: 4,
    image: './Image/Prof-Mantile-Lekala.jpg',
    name: 'Prof M Lekala',
    title: 'Department of Physics',
    line: './Image/title_dbar.png',
    description: 'Specialising in Theoretical Nuclear, Atomic and Molecular Physics and Computational Physics',
  },
  {
    id: 5,
    image: './Image/EevaRapoo.jpg',
    name: 'Prof E Rapoo',
    title: 'Chair of Statistics Department',
    line: './Image/title_dbar.png',
    description: 'Specialising in Stochastics, Mathematics and Statistics Education and numerical analysis.',
  },
  {
    id: 6,
    image: './Image/Gaetan-Kabera.jpg',
    name: 'Prof G Kabera',
    title: 'Statistics Lecturer',
    line: './Image/title_dbar.png',
    description: 'Specialising in Optimal experimental Designs, Survival Analysis and Analytic Hierarchy Process.',
  },
];

const showMore = document.getElementById('showMore');
dataCards.forEach((card) => {
  const temp = document.createElement('div');
  temp.innerHTML = `
  <div class='showMoreCont'>
  <div class='img1'><img class='pop-img' src=${card.image}></div>
  <div class='che-img'></div>
  <div class='flex-txt'>
  <h4 class='dept'>${card.name}</h4>
  <p class='title'>${card.title}</p>
  <div class='title-bar'><img src=${card.line}></div>
  <p class='descr'>${card.description}</p>
  </div>
  </div>
  `;
  showMore.append(temp);
});