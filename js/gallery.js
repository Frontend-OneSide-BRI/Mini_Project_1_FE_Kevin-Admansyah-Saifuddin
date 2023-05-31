var jsonData = [
  {
    "caption": "Matahari Terbit",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049388/img01_wqwpnu.jpg",
    "category": "Nature",
    "detail": "Ini adalah detail Matahari Terbit"
  },
  {
    "caption": "Kayu",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg",
    "category": "Nature",
    "detail": "Ini adalah detail Kayu"
  },
  {
    "caption": "Matahari Terbenam",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img03_n0asvf.jpg",
    "category": "Weather",
    "detail": "Ini adalah detail Matahari Terbenam"
  },
  {
    "caption": "Pemandangan",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img04_iypkrg.jpg",
    "category": "People",
    "detail": "Ini adalah detail Pemandangan"
  },
  {
    "caption": "Orang Nelfon",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img05_r60xhy.jpg",
    "category": "People",
    "detail": "Ini adalah detail Orang Nelfon"
  },
  {
    "caption": "Orang Berjalan",
    "imageURL": "https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img06_ziqnpg.jpg",
    "category": "People",
    "detail": "Ini adalah detail Orang Berjalan"
  },
  {
    "caption": "Lembah",
    "imageURL": "https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?w=1060&t=st=1685549320~exp=1685549920~hmac=8632d2ada666b912d7f559929351267a1914e50d7046795fd256f604aed2eb76",
    "category": "Nature",
    "detail": "Ini adalah detail Lembah"
  },
  {
    "caption": "Hujan",
    "imageURL": "https://img.freepik.com/free-photo/rain-outside-windows-villa_1321-908.jpg?t=st=1685549987~exp=1685550587~hmac=5adcbe19413abc446d202a55e90968bd28b521efd99b61b997a896ca6e0c1421",
    "category": "Weather",
    "detail": "Ini adalah detail Hujan"
  },
  {
    "caption": "Agak Cerah",
    "imageURL": "https://img.freepik.com/free-photo/dark-stormy-clouds_181624-61.jpg?w=1060&t=st=1685549841~exp=1685550441~hmac=eda46b8fb8de7c954e709939530e274dd4010c7b55663df5c6e8f2f3a3ba409b",
    "category": "Weather",
    "detail": "Ini adalah detail Agak Cerah"
  }
];

function filterImages(category) {
  var gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  for (var i = 0; i < jsonData.length; i++) {
    if (category === "" || jsonData[i].category === category) {
      var article = document.createElement("article");
      article.className = "new-image";
      article.setAttribute("data-caption", jsonData[i].caption);

      var link = document.createElement("a");
      link.href = jsonData[i].imageURL;
      link.className = "image-popup";

      var image = document.createElement("img");
      image.src = jsonData[i].imageURL;

      image.style.width = "100%";
      image.style.height = "auto";

      link.appendChild(image);
      article.appendChild(link);

      var p = document.createElement("p");
      p.className = "searchable";
      p.textContent = jsonData[i].caption;

      article.appendChild(p);
      gallery.appendChild(article);

      article.addEventListener('click', function(e) {
        e.preventDefault();
        var caption = this.getAttribute("data-caption");
        var imageURL = this.querySelector("img").getAttribute("src");
        var detail = jsonData.find(function(item) {
          return item.caption === caption;
        }).detail;

        document.querySelector("#imageModalLabel").textContent = caption;
        document.querySelector(".modal-image").src = imageURL;
        document.querySelector(".modal-detail").textContent = detail;

        var imageModal = new bootstrap.Modal(document.querySelector("#imageModal"));
        imageModal.show();
      });
    }
  }
}

function searchImages(keyword) {
  var gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  for (var i = 0; i < jsonData.length; i++) {
    if (jsonData[i].caption.toLowerCase().includes(keyword.toLowerCase())) {
      var article = document.createElement("article");
      article.className = "new-image";
      article.setAttribute("data-caption", jsonData[i].caption);

      var link = document.createElement("a");
      link.href = jsonData[i].imageURL;
      link.className = "image-popup";

      var image = document.createElement("img");
      image.src = jsonData[i].imageURL;
      image.style.width = "100%";
      image.style.height = "auto";

      link.appendChild(image);
      article.appendChild(link);

      var p = document.createElement("p");
      p.className = "searchable";
      p.textContent = jsonData[i].caption;

      article.appendChild(p);
      gallery.appendChild(article);

      article.addEventListener('click', function(e) {
        e.preventDefault();
        var caption = this.getAttribute("data-caption");
        var imageURL = this.querySelector("img").getAttribute("src");
        var detail = jsonData.find(function(item) {
          return item.caption === caption;
        }).detail;

        document.querySelector("#imageModalLabel").textContent = caption;
        document.querySelector(".modal-image").src = imageURL;
        document.querySelector(".modal-detail").textContent = detail;

        var imageModal = new bootstrap.Modal(document.querySelector("#imageModal"));
        imageModal.show();
      });
    }
  }
}

document.addEventListener('mousemove', function(e) {
  if (e.target.classList.contains('new-image')) {
    zoom.style.left = e.pageX - 50 + 'px';
    zoom.style.top = e.pageY - 50 + 'px';
    zoom.style.visibility = 'visible';
  }
});


document.addEventListener('mouseleave', function(e) {
  if (e.target.classList.contains('new-image')) {
    zoom.style.visibility = 'hidden';
  }
});

$(document).ready(function() {
  $('#searchInput').on('input', function(e) {
    var searchText = $(this).val().toLowerCase();
    if (searchText !== "") {
      searchImages(searchText);
    } else {
      filterImages("");
    }
  });
});

filterImages("");
