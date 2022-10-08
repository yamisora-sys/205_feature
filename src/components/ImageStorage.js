import { app, db} from './Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { async } from '@firebase/util';

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, 'images', new Date().getTime().toString());

const uploadImage = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            getDownloadURL(imgRef).then((url) => {
            const data = {
                name: file.name,
                url: url
            }
            setDoc(docRef, data).then(() => {
                alert("Image uploaded successfully");
            }).catch((error) => {
                console.log(error);
            });
        })
        });
    } else {
        alert("Please upload a valid image file");
    }
};

const getlistImages = async () => {
    try {
        const q = query(collection(db, "images"));
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
        })

        return data
    
    } catch (error) {
        console.log(error);
    }
};



export function ImageStorage(){
    const [imageLists, setImageLists] = useState('');

    useEffect(() => {
        async function fetchData() {

            const images=await getlistImages();

            setImageLists(images)
            console.log(imageLists)
        }

        fetchData()     
    }, []);
    
    return (
        <div>
        <div>
            <input type="file" id="image" accept='image/*'/>
            <button onClick={uploadImage}>Upload Image</button>
            <div class="imageList">
                {imageLists && imageLists.map((doc) => 
                     (
                        <div>
                            <img src={doc.url} alt="image" width="20%" />
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
};
