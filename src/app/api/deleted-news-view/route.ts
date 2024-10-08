import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const newsQuery = query(
            collection(db, 'News'),
            where('deleted', '==', true),
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

        return NextResponse.json(newsData);
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
