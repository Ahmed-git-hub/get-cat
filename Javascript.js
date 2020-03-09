function excute() {
  document.getElementById('getText').addEventListener('click', getText);
  document.getElementById('getCat').addEventListener('click', getCat);
  document.getElementById('getBreed').addEventListener('click', assignBreed_No)
}


// Function to call text file

function getText() {
  fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data
    })
}


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
        document.getElementById('output').innerHTML = output
      });

    })

}


// Functions to call Images for specific breeds and number of Images


// function to assign form entry
function assignBreed_No() {
  const breed = document.getElementById('enterBreed').value;

  // const limitNo = document.getElementById("limitNo").value;

  document.getElementById('form').addEventListener('click', function(event) {
    event.preventDefault()
  });

  getBreedId(breed)
}

// Function to get breed Id
function getBreedId(breed) {
  fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(function (catBreedId) {
        const breedId = catBreedId.id;
        getBreedPic(breedId, breed)
      });
    });
}

// Function to get breed Pic

// function getBreedPic(breedId, limitNo) {
//   fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=${limitNo}&size=small`)
//     .then(res => res.json())
//     .then(data => {
//       document.getElementById('catTitle').innerHTML = data.name
//       data.forEach(function (catBreedPic) {
//         output += `
//       <div>
//        <img src="${catBreedPic.url}" alt="Cat picture">
//       </div>
//       `
//         document.getElementById('output').innerHTML = output
//       });

//     })

// }

// Previous function which return the H1 and picture in the promise
function getBreedPic(breedId, breed) {
  fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=2`)
    .then(res => res.json())
    .then(data => {
      let title = `<h1>Cat ${breed} Pictures</h1>`;
      let photos = '';
      data.forEach(function (catBreedPic) {
        photos += `
        <img src="${catBreedPic.url}" alt="Cat picture">
       `
      });
      document.getElementById('title').innerHTML = title
      document.getElementById('photos').innerHTML = photos
      
    })

}