import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { news_data, news_type } = await req.json();

        const docRef = await addDoc(collection(db, 'News'), {
            news_data,
            news_timestamp: serverTimestamp(),
            news_type,
            deleted: false,
        });

        return NextResponse.json({ message: 'Document successfully written!', id: docRef.id });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error adding document: ' + (e as Error).message }, { status: 500 });
    }
}
