import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const header = document.getElementById("status");
const fileNameInput = document.getElementById("filename");

// const img = document.createElement("img");
// img.src = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-22kk.appspot.com/o/Molly.jpg?alt=media&token=6cbdc9dd-6f1c-4459-8f6c-db3f48f22622";
// document.body.appendChild(img);

const btn = document.getElementById("mySend");
const input = document.getElementById("myFile");

btn.addEventListener("click", () => {

    const file = input.files[0];
    const imageRef = ref(storage, fileNameInput.value);

    header.innerText = "PRZESYŁAM";
    uploadBytes(imageRef, file).then(() => {
        header.innerText = "Przesłano";
        
        getDownloadURL(imageRef).then(url => {
            const img = document.createElement("img");
            img.src = url;
            document.body.appendChild(img);
            })
    })
})




