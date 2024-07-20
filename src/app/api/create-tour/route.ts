import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { tour_info, schedule } = await req.json();
        const docRef = await addDoc(collection(db, 'Tours'), {
            deleted: false,
            created_at: serverTimestamp(),
            tour_info,
            schedule,
        });

        return NextResponse.json({ message: 'Document successfully written!', id: docRef.id });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error adding document: ' + e }, { status: 500 });
    }
}
