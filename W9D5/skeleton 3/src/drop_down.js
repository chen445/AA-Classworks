
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export function dogLinkCreator () {
 
    const arr = [];  

  for (const dog in dogs) {
    let a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogs[dog];

    let li = document.createElement('li');
    li.classList.add('dog-link')
    li.append(a);
    arr.push(li);
  }
  return arr;
}

const dropList =document.getElementsByClassName('drop-down-dog-list')[0];

export function attachDogLinks(){
  let dogLinks=dogLinkCreator();
    dogLinks.forEach((dog)=>{
    dropList.append(dog);
  })
}

const dropDown = document.getElementsByClassName("drop-down-dog-nav")[0];

function handleEnter(e){
  e.preventDefault();
  e.stopPropagation();
  let children = dropList.children;
  for(let i=0;i<children.length;i++){
    let child= children[i];
    child.classList.add('show')
  }
}

function handleLeave(e){
  e.preventDefault();
  e.stopPropagation();
  let children = dropList.children;
  for(let i=0;i<children.length;i++){
    let child= children[i];
    child.classList.remove('show')
  }
}




dropDown.addEventListener('mouseenter',handleEnter)
dropDown.addEventListener('mouseleave',handleLeave)



attachDogLinks()