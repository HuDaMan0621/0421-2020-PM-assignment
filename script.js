// header
//h1
//nav
//li > a
//li > a

const container = document.getElementById('container');

document.body.style.fontFamily = 'sans-serif';

const header = document.createElement('header');
header.style.color = "white";
header.style.backgroundColor = '#65a6f3';
header.style.display = 'flex';
header.style.padding = "0 20px";

const heading1 = document.createElement('h1');
heading1.textContent = 'HighOnCoding';
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement('nav');
topNav.style.display = 'flex';
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);

//curse of the current reviews 

const container2 = document.getElementById('container2');
document.body.style.fontFamily = 'sans-serif';
container2.style.padding = "20px";
container2.style.marginLeft = '20px';
container2.style.marginTop = "20px";

const header2 = document.createElement('header2');
header2.style.color = "#42464c";
header2.style.backgroundColor = '#d5d6d9';


const heading2 = document.createElement('h2');
container2.style.backgroundColor = "#d5d6d9";
heading2.textContent = 'Curse of the Current Reviews';
heading2.style.backgroundColor = "#d5d6d9";
header2.appendChild(heading2);

const paragraph1 = document.createElement('para1');
paragraph1.style.display = "flex";
paragraph1.textContent = "when you want to buy something from Apple, expect to pay a high price. when you want to buy something from Apple, expect to pay a high price when you want to buy something from Apple, expect to pay a high price when you want to buy something from Apple, expect to pay a high price when you want to buy something from Apple, expect to pay a high price"
paragraph1.style.width = "100%";
paragraph1.style.padding = "1px";
paragraph1.style.marginLeft = "0px";

header2.appendChild(paragraph1);
container2.appendChild(header2);

//Hello WatchKit
const container3 = document.getElementById('container3');
document.body.style.fontFamily = "sans-serif";
container3.style.padding = "20px";
container3.style.marginLeft = "20px";
container3.style.marginTop = "20px";

const header3 = document.createElement('header3');
header3.style.color = "#42464c";
header3.style.backgroundColor = '#d5d6d9';

const heading3 = document.createElement('h2');
container3.style.backgroundColor = "brown";
heading3.textContent = "Hello WatchK";
heading3.style.backgroundColor = "#d5d6d9";
header3.appendChild(heading3);

// const heading3 = document.createElement('h2');
// container3.style.backgroundColor = "#d5d6d9";
// heading3.textContent = 'Curse of the Current Reviews';
// heading3.style.backgroundColor = "#d5d6d9";
// header3.appendChild(heading3);

const paragraph2 = document.createElement('para2');
paragraph2.style.display = "flex";
paragraph2.textContent = "APPLE and orange";
paragraph2.style.width = "100%";
paragraph2.style.padding = "1px";
paragraph2.style.marginLeft = "0px";

header3.appendChild(paragraph2);
container3.appendChild(header3);



// const footer = document.createElement("footer");
// footer.style.color = "white";
// footer.style.padding = "0 20px";
// footer.textContent = "test";
// container.appendChild(footer);