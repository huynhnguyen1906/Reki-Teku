import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { id, type } = await req.json();
        console.log('Received ID:', id);
        console.log('Received Type:', type);

        if (!['news', 'tours'].includes(type)) {
            console.error('Invalid type');
            return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }

        const collectionName = type === 'news' ? 'News' : 'Tours';
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);

        console.log(`Document successfully deleted with ID: ${id} from collection: ${collectionName}`);
        return NextResponse.json({ message: 'Document successfully deleted!' });
    } catch (e) {
        console.error('Error in POST /api/delete-item-permanently:', e);
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error deleting document: ' + (e as Error).message }, { status: 500 });
    }
}
