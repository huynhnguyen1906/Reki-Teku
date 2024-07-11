'use client';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Style from '@styles/componentsStyles/Admin/CreateTourForm.module.scss';

interface ImageUploaderProps {
    setImage: (image: string) => void;
}

export default function ImageUploader({ setImage }: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <div className="image-uploader">
            <Button onClick={handleButtonClick} variant="secondary" className={Style.AddImgBtn}>
                写真追加
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
            />
        </div>
    );
}
