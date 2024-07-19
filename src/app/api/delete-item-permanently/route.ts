import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { authenticateRequest } from '@/utils/auth';
import { storage } from '@/lib/firebase';

const findImageUrls = (obj: any): string[] => {
    let urls: string[] = [];
    if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'string' && obj[key].startsWith('https://firebasestorage.googleapis.com')) {
                    urls.push(obj[key]);
                } else {
                    urls = urls.concat(findImageUrls(obj[key]));
                }
            }
        }
    }
    return urls;
};

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const { id, type } = await req.json();

        if (!['news', 'tours'].includes(type)) {
            return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }

        const collectionName = type === 'news' ? 'News' : 'Tours';
        const docRef = doc(db, collectionName, id);

        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Document does not exist' }, { status: 404 });
        }

        const docData = docSnap.data();

        const imageUrls = findImageUrls(docData);

        await Promise.all(
            imageUrls.map(async (url) => {
                const storageRef = ref(storage, url);
                await deleteObject(storageRef).catch((error) => {
                    console.error('Error deleting image from storage:', error);
                });
            }),
        );

        // Xóa doc từ Firestore
        await deleteDoc(docRef);

        return NextResponse.json({ message: 'Document and associated images successfully deleted!' });
    } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
            return NextResponse.json({ error: (e as Error).message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error deleting document: ' + (e as Error).message }, { status: 500 });
    }
}
