import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    try {
        const docRef = doc(db, 'TextContent', 'AboutText');
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'No such document!' }, { status: 404 });
        }

        return NextResponse.json(docSnap.data());
    } catch (e) {
        return NextResponse.json({ error: 'Error fetching document: ' + (e as Error).message }, { status: 500 });
    }
}

export const revalidate = 0;
