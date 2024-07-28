import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { questions } = await req.json();

        const docRef = doc(db, 'TextContent', 'Questions');
        await setDoc(docRef, { questions }, { merge: true });

        return NextResponse.json({ message: 'Questions successfully saved!' });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error saving questions: ' + (e as Error).message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const docRef = doc(db, 'TextContent', 'Questions');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            return NextResponse.json({ questions: [] });
        }
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error fetching questions: ' + (e as Error).message }, { status: 500 });
    }
}

export const revalidate = 0;
