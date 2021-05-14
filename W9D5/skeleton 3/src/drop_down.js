
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
    a.innerHTML = dog.innerHTML;
    a.href = dogs[dog];

    let li = document.createElement('li');
    li.classList.add('dog-link')
    li.append(a);
    arr.push(li);
  }

  return arr;
}




console.log(dogLinkCreator())