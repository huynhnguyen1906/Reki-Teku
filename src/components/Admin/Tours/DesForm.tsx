'use client';
import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import { Destination, DestinationFormProps } from '@/types/AdminCreateTour';
import Image from 'next/image';

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

    const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>, destIndex: number) => {
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

    return (
        <div>
            <h3>{day}日目</h3>
            {destinations.map((dest, destIndex) => (
                <div key={destIndex}>
                    <label>目的地：</label>
                    <input
                        type="text"
                        name="destination"
                        value={dest.destination}
                        onChange={(e) => handleDestinationChange(e, destIndex)}
                    />
                    <label>紹介文書：</label>
                    <input
                        type="text"
                        name="description"
                        value={dest.description}
                        onChange={(e) => handleDestinationChange(e, destIndex)}
                    />
                    <ImageUploader setImage={(image) => setImage(image, destIndex)} />
                    {dest.image && <Image src={dest.image} alt="Uploaded" width={100} height={100} />}
                </div>
            ))}
            <button onClick={addDestination}>目的地追加</button>
        </div>
    );
}
