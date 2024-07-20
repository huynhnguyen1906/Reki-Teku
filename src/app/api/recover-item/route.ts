import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { id, type } = await req.json();

        if (!['news', 'tours'].includes(type)) {
            return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }

        const collectionName = type === 'news' ? 'News' : 'Tours';
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            deleted: false,
        });

        return NextResponse.json({ message: 'Document successfully updated!' });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error updating document: ' + (e as Error).message }, { status: 500 });
    }
}
