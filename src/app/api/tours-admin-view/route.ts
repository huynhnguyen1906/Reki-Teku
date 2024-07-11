import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const toursQuery = query(collection(db, 'Tours'), orderBy('created_at'));
        const querySnapshot = await getDocs(toursQuery);

        const toursData = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            const tourInfo = data.tour_info;
            return {
                id: doc.id,
                name: tourInfo.name,
                description: tourInfo.description,
                applyPoint: tourInfo.applyPoint,
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

export const revalidate = 10;
