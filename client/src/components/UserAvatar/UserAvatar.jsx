import { useRef, useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { useGridApiMethod } from '@mui/x-data-grid';

export default function UserAvatar(props) {
    const { urlImage, userId } = props;

    const dispatch = useDispatch()

    const [currentImage, setCurrentImage] = useState(urlImage);
    const [previewImage, setPreviewImage] = useState(urlImage);
    const inputFile = useRef();

    useEffect(() => {
        setCurrentImage(urlImage);
        setPreviewImage(urlImage);
    }, [urlImage])

    const handleChangeImage = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            console.log(reader.result);
            setPreviewImage(reader.result);
        };
    }

    const clickImage = () => {
        inputFile.current.click();
    }

    const sendData = async (content) => {
        try{
            const response = await axios({
                method: "put",
                url: `/avatar/${userId}`,
                data: content,
                headers: { "Content-Type": "multipart/form-data" }
            })
            setPreviewImage(response.data.imageURL);
        } catch(error){
            console.log(error.message);
        }
    }

    const saveImage = () => {
        const formData = new FormData();
        formData.append("image", inputFile.current.files[0]);  
        
        dispatch(sendData(formData));
    }

    return (
        <div>
            <button onClick={clickImage}>
                <img className='avatar' src={previewImage} alt="Profile picture"/>
            </button>
            <input type='file' ref={inputFile} onChange={handleChangeImage} style={{ display: "none" }} />
            <button onClick={saveImage}>Save</button>
        </div>
    )
}