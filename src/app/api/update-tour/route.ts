import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { id, tour_info, schedule } = await req.json();

        const docRef = doc(db, 'Tours', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Document does not exist' }, { status: 404 });
        }

        await updateDoc(docRef, {
            tour_info,
            schedule,
        });

        return NextResponse.json({ message: 'Document successfully updated!', id: docRef.id });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error updating document: ' + e }, { status: 500 });
    }
}
