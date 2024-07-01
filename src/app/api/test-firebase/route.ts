import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { TestDocument } from '@/types/TestDocument';

export async function GET(req: NextRequest) {
    try {
        const querySnapshot = await getDocs(collection(db, 'Test'));
        const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data() as TestDocument['data'],
        }));

        if (documents.length > 0) {
            return NextResponse.json({
                message: `Firebase connection successful! Found ${documents.length} documents.`,
                documents,
            });
        } else {
            return NextResponse.json({ message: 'Firebase connection successful, but no documents found.' });
        }
    } catch (error: any) {
        return NextResponse.json({ message: `Firebase connection failed: ${error.message}` });
    }
}
