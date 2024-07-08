import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
    const { news_data, news_type } = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'News'), {
            news_data,
            news_timestamp: serverTimestamp(),
            news_type,
            deleted: false,
        });

        return NextResponse.json({ message: 'Document successfully written!', id: docRef.id });
    } catch (e) {
        return NextResponse.json({ error: 'Error adding document: ' + e }, { status: 500 });
    }
}
