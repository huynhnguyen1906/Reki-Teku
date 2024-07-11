'use client';
import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import { Destination, DestinationFormProps } from '@/types/AdminCreateTour';
import Image from 'next/image';
import Button from 'react-bootstrap/esm/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { FaRegPlusSquare } from 'react-icons/fa';
import Style from '@styles/componentsStyles/Admin/CreateTourForm.module.scss';

export default function CreateToursDesForm({
    day,
    destinations: initialDestinations,
    onDestinationsChange,
}: DestinationFormProps) {
    const [destinations, setDestinations] = useState<Destination[]>(initialDestinations);

    useEffect(() => {
        if (JSON.stringify(destinations) !== JSON.stringify(initialDestinations)) {
            onDestinationsChange(destinations);
        }
    }, [destinations, initialDestinations, onDestinationsChange]);

    const addDestination = () => {
        setDestinations([...destinations, { destination: '', description: '', image: '' }]);
    };

    const handleDestinationChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        destIndex: number,
    ) => {
        const { name, value } = e.target;
        const newDestinations = [...destinations];
        newDestinations[destIndex][name as keyof Destination] = value;
        setDestinations(newDestinations);
    };

    const setImage = (image: string, destIndex: number) => {
        const newDestinations = [...destinations];
        newDestinations[destIndex].image = image;
        setDestinations(newDestinations);
    };

    const handleDeleteDestination = (destIndex: number) => {
        const newDestinations = destinations.filter((_, index) => index !== destIndex);
        setDestinations(newDestinations);
    };

    return (
        <>
            <div className={Style.desBox}>
                <h3>{day}日目</h3>
                {destinations.map((dest, destIndex) => (
                    <div key={destIndex} className={Style.desItem}>
                        <div className={Style.inputItem}>
                            <label>目的地：</label>
                            <input
                                type="text"
                                name="destination"
                                placeholder="目的地を入力。。。"
                                value={dest.destination}
                                onChange={(e) => handleDestinationChange(e, destIndex)}
                            />
                        </div>
                        <div className={Style.inputItem}>
                            <label>紹介文書：</label>
                            <textarea
                                name="description"
                                placeholder="紹介文書を入力。。。"
                                value={dest.description}
                                onChange={(e) => handleDestinationChange(e, destIndex)}
                            />
                        </div>
                        <ImageUploader setImage={(image) => setImage(image, destIndex)} />
                        {dest.image && (
                            <div className={Style.imageBox}>
                                <div className={Style.imgItem}>
                                    <Image src={dest.image} alt="Uploaded" layout="fill" objectFit="contain" />
                                </div>
                            </div>
                        )}
                        <CloseButton
                            onClick={() => handleDeleteDestination(destIndex)}
                            className={Style.desDeleteBtn}
                        />
                    </div>
                ))}
                <Button variant="info" onClick={addDestination} className={Style.addDesBtn}>
                    <FaRegPlusSquare />
                    目的地追加
                </Button>
            </div>
        </>
    );
}
