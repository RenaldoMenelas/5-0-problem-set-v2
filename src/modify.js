const getMainHeadingText = () => {
  const mainText = document.getElementById('main-heading')
  console.log(mainText.textContent)
};

const getAllMainText = () => {
     const mainText = document.querySelectorAll('.main-text')
     let array = [... mainText]
     let arr = []
  arr.push(mainText[0].textContent,mainText[1].textContent,mainText[2].textContent)
console.log(arr.join(','))
};

const setSubtitleText = () => {
  const h2 = document.querySelector('#subtitle');
  h2.textContent = 'This is a subtitle!'

};

const modifyDivClassList = () => {
 let divClass = document.getElementById(`modify-classes`)
 divClass.classList.remove(`bad-class`)
 divClass.classList.add('new-class')
};

const addH2 = () => {
 let h1 = document.createElement('h1')
 h1.setAttribute('id','h2-test')
 h1.textContent = 'Another one!'
 document.body.appendChild(h1)
  
};

const removeOldInfo = () => {
  let oldInfo = document.getElementById(`old-info`)
  oldInfo.remove()
};

const makeAlphabet = () => {
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alp = document.getElementById('alphabet')
    let num = alp.getAttribute('data-num-letters')
    //const collection = document.getElementsByTagName("li");
    for(let i =0; i <num; i++){
        let  li = document.createElement('li')
        li.textContent =  `${string[i]} is letter #${i + 1} in the alphabet`
        alp.appendChild(li)
       
    }
    
    
};

const makeBio = () => {
  let bio = document.querySelector(`#my-bio`)
  bio.innerHTML =`
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
         <li>Running</li>
          <li>Reading</li>
          <li>Writing</li>
    </ul>`
};

const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

main();
