//vscode
//build url
let str = document.URL;
let indexx = str.indexOf('//')+2;
let before = str.slice(0,indexx);
let after = str.slice(indexx);
let vscode = before+'vscode.dev/'+after;

//add button to ui
const flex = document.querySelector('.file-navigation');
const vsCode = document.createElement('a');
vsCode.classList.add('vscode-btn');
vsCode.href = vscode;
vsCode.target = '_blank';
flex.insertAdjacentElement('beforeend',vsCode);


//icon of ui element
//*to access img in root folder you need specify the same path in 'web_accessible_resources'
let imgURL = chrome.runtime.getURL("img/vscode.svg");

let vsImg = document.createElement('img');
vsImg.src = imgURL;
vsImg.classList.add('vscode-img');
vsCode.append(vsImg);


//codesandbox
//build url
let str2 = document.URL;
let indexx2 = str.indexOf('.com');
let before2 = str.slice(0,indexx2);
let after2 = str.slice(indexx2);
let sandboxLink = before2+'box'+after2; //url

//add button to ui
const sandbox = document.createElement('a');
sandbox.classList.add('vscode-btn');
sandbox.href = sandboxLink;
sandbox.target = '_blank';
flex.insertAdjacentElement('beforeend',sandbox);

//icon of ui element
//*to access img in root folder you need specify the same path in 'web_accessible_resources'
let imgURL2 = chrome.runtime.getURL("img/codesandbox.svg");

let sbImg = document.createElement('img');
sbImg.src = imgURL2;
sbImg.classList.add('vscode-img');
sandbox.append(sbImg);


