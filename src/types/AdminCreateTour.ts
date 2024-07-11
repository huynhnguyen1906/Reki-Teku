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

export interface TourInfo {
    location: string;
    name: string;
    price: string;
    days: string;
    description: string;
    meetingPoint: string;
    applyPoint: string;
}

export interface Schedule {
    day: number;
    destinations: Destination[];
}
