import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { text } = await req.json();

        const docRef = doc(db, 'TextContent', 'IndexText');
        await setDoc(docRef, { text }, { merge: true });

        return NextResponse.json({ message: 'Text successfully saved!' });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error saving text: ' + (e as Error).message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const docRef = doc(db, 'TextContent', 'IndexText');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json({ text: docSnap.data().text });
        } else {
            return NextResponse.json({ text: '' });
        }
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error fetching text: ' + (e as Error).message }, { status: 500 });
    }
}

export const revalidate = 0;
