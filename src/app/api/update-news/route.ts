import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { id, news_data, news_type } = await req.json();

        const docRef = doc(db, 'News', id);

        await updateDoc(docRef, {
            news_data,
            news_type,
        });

        console.log(`Document successfully updated with ID: ${id}`);
        return NextResponse.json({ message: 'Document successfully updated!' });
    } catch (e) {
        console.error('Error in POST /api/update-news:', e);
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error updating document: ' + (e as Error).message }, { status: 500 });
    }
}
