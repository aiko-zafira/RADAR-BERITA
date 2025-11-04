if(localStorage.getItem("beritaList")){
  beritaListStored = JSON.parse(localStorage.getItem("beritaList"));
  for(let i = 0; i < beritaList.length; i++){
    beritaList[i].likes = beritaListStored[i].likes;
  }
}

const listContainer = document.getElementById("berita-list");
const search = document.getElementById("search");

card.innerHTML = `
  <img src="${b.gambar}" style="width:100%; border-radius:10px; margin-bottom:10px;">
  <h3>${b.judul}</h3>
  <p>${b.isi}</p>

  <button onclick="bukaDetail(${i})">Baca Selengkapnya</button>

  <p style="margin-top:10px;">
    ❤️ <span id="like-${i}">${b.likes}</span> Like
  </p>
  <button onclick="likeBerita(${i})">Like</button>
`;

render(beritaList);

search.addEventListener("keyup", () => {
  const keyword = search.value.toLowerCase();
  const filtered = beritaList.filter(b => b.judul.toLowerCase().includes(keyword));
  render(filtered);
});

function bukaDetail(index){
  window.location.href = "detail.html?berita=" + index;
}

function likeBerita(index){
  beritaList[index].likes++;
  const likeCount = document.getElementById("like-" + index);
  likeCount.innerText = beritaList[index].likes;

  localStorage.setItem("beritaList", JSON.stringify(beritaList));

  likeCount.classList.add("like-anim");
  setTimeout(() => {
    likeCount.classList.remove("like-anim");
  }, 400);
}

