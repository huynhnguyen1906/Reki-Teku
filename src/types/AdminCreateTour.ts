export interface Destination {
    destination: string;
    description: string;
    image: string;
}

export interface DestinationFormProps {
    day: number;
    destinations: Destination[];
    onDestinationsChange: (destinations: Destination[]) => void;
}
