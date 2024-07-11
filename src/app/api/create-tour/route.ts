import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: NextRequest) {
    const { tour_info, schedule } = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'Tours'), {
            tour_info,
            schedule,
            deleted: false,
        });

        return NextResponse.json({ message: 'Document successfully written!', id: docRef.id });
    } catch (e) {
        return NextResponse.json({ error: 'Error adding document: ' + e }, { status: 500 });
    }
}
