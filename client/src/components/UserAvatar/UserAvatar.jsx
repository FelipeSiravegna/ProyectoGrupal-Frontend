import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function UserAvatar(props) {
    const { urlImage, userId } = props;

    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(urlImage);
    const [previewImage, setPreviewImage] = useState(urlImage);
    const [render, setRender] = useState('');

    const inputFile = useRef();

    useEffect(() => {
        if (!props.changeimage) setPreviewImage(urlImage)
        setCurrentImage(urlImage);
        setPreviewImage(urlImage);
    }, [urlImage, props.changeimage, render])

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
        try {
            const response = await axios({
                method: "put",
                url: `/avatar/${userId}`,
                data: content,
                headers: { "Content-Type": "multipart/form-data" }
            })
            setPreviewImage(response.data.imageURL);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    const saveImage = () => {
        const formData = new FormData();
        formData.append("image", inputFile.current.files[0]);

        sendData(formData);
    }

    return (
        <div className='avatar'>
            <img className='avatar' src={previewImage} alt="Profile picture" />
            <input type='file' ref={inputFile} onChange={handleChangeImage} style={{ display: "none" }} />
            <button className={props.changeimage ? 'changeImageDisabled' : 'changeImage'} disabled={props.changeimage} onClick={clickImage}><AddAPhotoIcon /></button>
            <Button onClick={saveImage} disabled={props.changeimage} color='success' variant="outlined">Save</Button>
        </div>
    )
}