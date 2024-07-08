import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const newsQuery = query(
            collection(db, 'News'),
            where('deleted', '==', false),
            orderBy('news_timestamp', 'desc'),
        );

        const querySnapshot = await getDocs(newsQuery);

        const newsData = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            const blocks = data.news_data.blocks;
            const header = blocks.find((block: any) => block.type === 'header');
            const text = blocks.find((block: any) => block.type === 'paragraph');

            return {
                id: doc.id,
                news_timestamp: data.news_timestamp,
                news_type: data.news_type,
                header: header ? header.data : null,
                text: text ? text.data : null,
            };
        });

        const response = NextResponse.json(newsData);

        // Set cache control headers
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');

        return response;
    } catch (e) {
        const errorResponse = NextResponse.json({ error: 'Error fetching documents: ' + e }, { status: 500 });

        errorResponse.headers.set('Cache-Control', 'no-store');

        return errorResponse;
    }
}
