import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const docRef = doc(db, 'Tours', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Document does not exist' }, { status: 404 });
        }

        return NextResponse.json(docSnap.data());
    } catch (e) {
        console.error('Error in GET /api/get-tour/[id]:', e);
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error fetching document: ' + (e as Error).message }, { status: 500 });
    }
}
export const revalidate = 0;
