import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, container, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5eApBvDfNxy5lVrngNiPY2QSSlepsBSA",
  authDomain: "sda-firebase-22kk.firebaseapp.com",
  projectId: "sda-firebase-22kk",
  storageBucket: "sda-firebase-22kk.appspot.com",
  messagingSenderId: "138487379478",
  appId: "1:138487379478:web:091b74d9f13e4ff195e737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



// // const img = document.createElement("img");
// // img.src = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-22kk.appspot.com/o/Molly.jpg?alt=media&token=6cbdc9dd-6f1c-4459-8f6c-db3f48f22622";
// // document.body.appendChild(img);

// const btn = document.getElementById("mySend");
// const input = document.getElementById("myFile");

// btn.addEventListener("click", () => {

//     const file = input.files[0];
//     const imageRef = ref(storage, fileNameInput.value);

//     header.innerText = "PRZESYŁAM";
//     uploadBytes(imageRef, file).then(() => {
//         header.innerText = "Przesłano";
        
//         getDownloadURL(imageRef).then(url => {
//             const img = document.createElement("img");
//             img.src = url;
//             document.body.appendChild(img);
//             })
//     })
// })

// const searchBtn = document.getElementById("searchBtn");
// const filenameInput = document.getElementById("filename");
// const img = document.getElementById("imageView");
// const messageHeader = document.getElementById("message");

// searchBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, filenameInput.value);

//   getDownloadURL(imageRef).then((url) => {
//     img.src = url;
//     messageHeader.innerText = "";
//   }).catch(() => {
//     messageHeader.innerText = "Nie ma takiego pliku!";
//   })
// })

// const list = document.getElementById("list");
// const storageRef = ref(storage);
// const image =document.getElementById("image");

// listAll(storageRef).then(res => {
//   res.items.forEach(item => {
//     const listItem = document.createElement("li");
//     const button = document.createElement("button");
    
//     button.innerText = "Show";
//     listItem.innerText = item.fullPath;

//     button.addEventListener("click", () => {
//       getDownloadURL(item).then(url => {
//         image.src = url;
//       })
//     });

//     listItem.appendChild(button);
//     list.appendChild(listItem);    
//   })
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.items.forEach(item => {
//     getDownloadURL(item).then(url => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const img = document.createElement("img");
//       card.appendChild(img);

//       const text = document.createElement("div");
//       text.classList.add("text");
//       card.appendChild(text);

//       img.src = url;
//       text.innerText = item.fullPath;

//       document.body.appendChild(card);
//     })
//   })
// })

// const albums = document.getElementById("albums");
// const sendBtn = document.getElementById("sendPhoto");
// const fileInput = document.getElementById("file");
// const container = document.getElementById("container");

// sendBtn.addEventListener("click", ()=> {
//   if(albums.value){
//     const file = fileInput.files[0];
//     const imageRef = ref(storage, `${albums.value}/${file.name}`);
//     uploadBytes(imageRef, file).then(() => {
//       fileInput.value = "";
//       console.log("WYSŁANO!");
//     })
//   }
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(prefix => {
//     const option = document.createElement("option");
//     option.innerText = prefix.fullPath;
//     albums.appendChild(option);
//   })
// })

// albums.addEventListener("change", () => {
//   if(albums.value) {   
//     const folderRef = ref(storage, albums.value);   // tworzenie referencji na folder - albums.value

//     listAll(folderRef).then(res => {                // listall tej referencji
//       container.innerHTML = "";

//       res.items.forEach(item => {                   // iteracja po items
//         getDownloadURL(item).then((url) => {        // getDownloadURL per item
//           const img = document.createElement("img");
//           img.src = url;
//           img.style.width = "100px";
//           document.body.appendChild(img);           // utworz img/ ustaw src/ appendChild
//           container.appendChild(img);
//         })
//       })
//     })
//   }
  
// })


const albums = document.getElementById("albums");
const images = document.getElementById("images");

const storageRef = ref(storage);
listAll(storageRef).then(res => {
  res.prefixes.forEach(prefix => {
    const listItem = document.createElement("li");
    listItem.innerText = prefix.name;

listItem.addEventListener("click", () => {
  listAll(prefix).then(imgRes => {
    images.innerHTML = "";
    imgRes.items.forEach((item) => {
      const imageItem = document.createElement("li");
      const deleteBtn = document.createElement("button");

      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteObject(item).then(() => {
          images.removeChild(imageItem);
        })
      })

      imageItem.innerText = item.name;
      imageItem.appendChild(deleteBtn);

      images.appendChild(imageItem);
    })
  })
})

    albums.appendChild(listItem);
  })
})
