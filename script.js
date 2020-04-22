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
const footer = document.createElement("footer");
footer.style.color = "white";
footer.style.padding = "0 20px";
footer.textContent = "test";
container.appendChild(footer);

//curse of the current reviews 

const container2 = document.getElementById('container2');
document.body.style.fontFamily = 'sans-serif';
container2.style.padding = "0 20px";
container2.style.marginLeft = '20px';


const header2 = document.createElement('header2');
header2.style.right="20px"; //come back to get the indentation
header2.style.color = "#42464c";
header2.style.backgroundColor = '#d5d6d9';
header2.style.padding = "0 20px";
header2.style.margin = "200px 1000px";
header2.style.border = "10px";
header2.style.borderColor = "10px";


const heading2 = document.createElement('h2');
container2.style.backgroundColor = "#d5d6d9";
heading2.textContent = 'Curse of the Current Reviews';
// heading2.style.paddingRight = "20px";
// heading2.style.margin = "20px";
heading2.style.backgroundColor = "#d5d6d9";
header2.appendChild(heading2);

const paragraph1 = document.createElement('para1');
// paragraph1.style.display = "flex";
paragraph1.textContent = "when you want to buy something from Apple, expect to pay a high price"
paragraph1.style.width = "200px";
paragraph1.style.padding = "10px";
header2.appendChild(paragraph1);


container2.appendChild(header2);