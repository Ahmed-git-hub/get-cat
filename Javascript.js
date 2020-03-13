function excute() {
  // document.getElementById('getText').addEventListener('click', getText);
  document.getElementById('getCat').addEventListener('click', getCat);
  document.getElementById('getBreed').addEventListener('click', assignBreedId)
}


// Function to call text file (removed)

// function getText() {
//   fetch('sample.txt')
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById('output').innerHTML = data
//     })
// }


// Function to call random cat images API
function getCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      let output = '<h1>Random Cat Picture</h1>';
      data.forEach(function (catPicture) {
        output += `
      <div>
       <img src="${catPicture.url}" alt="Cat picture">
      </div>
      `
        document.getElementById('pictures').innerHTML = output
      });

    })

}


// Functions to call pictures for specific breeds and number of pictures


// function to assign breed form entry
function assignBreedId() {
  let breed = document.getElementById('enterBreed').value;

  document.getElementById('form').addEventListener('click', function(event) {
    event.preventDefault()
  });

  getBreedId(breed)
}

// Function to get breed Id and assigning limit number
function getBreedId(breed) {

  let limitNo = document.getElementById("enterlimitNo").value;


  fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(function (catBreedId) {
        var breedId = catBreedId.id;

        getBreedPic(breed, breedId, limitNo)

      });
    });
}

// Function to get breed Picture(s)

function getBreedPic(breed, breedId, limitNo) {
  fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=${limitNo}`)
    .then(res => res.json())
    .then(data => {
      let title = `<h1>Cat ${breed} Pictures</h1>`;
      let pictures = '';
      data.forEach(function (catBreedPic) {
        pictures += `
        <img src="${catBreedPic.url}" alt="Cat picture">
       `
      });
      document.getElementById('title').innerHTML = title
      document.getElementById('pictures').innerHTML = pictures
      
    })

}