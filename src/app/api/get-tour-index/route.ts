import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const toursQuery = query(collection(db, 'Tours'), where('deleted', '==', false), orderBy('created_at', 'desc'));
        const querySnapshot = await getDocs(toursQuery);

        const toursData = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            const schedule = data.schedule || [];
            const tourInfo = data.tour_info || {};

            const firstDay = schedule[0] || {};
            const firstDestination = (firstDay.destinations && firstDay.destinations[0]) || {};

            return {
                id: doc.id,
                tour_info: {
                    location: tourInfo.location || '',
                    price: tourInfo.price || '',
                    days: tourInfo.days || '',
                    name: tourInfo.name || '',
                    description: tourInfo.description || '',
                },
                first_destination_image: firstDestination.image || '',
            };
        });

        return NextResponse.json(toursData);
    } catch (e) {
        return NextResponse.json(
            { error: 'Error fetching documents: ' + e },
            {
                status: 500,
            },
        );
    }
}

export const revalidate = 0;
