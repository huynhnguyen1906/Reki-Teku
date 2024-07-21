import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const newsQuery = query(
            collection(db, 'News'),
            where('deleted', '==', false),
            orderBy('news_timestamp', 'desc'),
            limit(1),
        );

        const toursQuery = query(
            collection(db, 'Tours'),
            where('deleted', '==', false),
            orderBy('created_at', 'desc'),
            limit(1),
        );

        const [newsSnapshot, toursSnapshot] = await Promise.all([getDocs(newsQuery), getDocs(toursQuery)]);

        const firstNewsId = !newsSnapshot.empty ? newsSnapshot.docs[0].id : null;
        const firstTourId = !toursSnapshot.empty ? toursSnapshot.docs[0].id : null;

        return NextResponse.json({
            newsId: firstNewsId,
            tourId: firstTourId,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching documents: ' + error }, { status: 500 });
    }
}

export const revalidate = 0;
