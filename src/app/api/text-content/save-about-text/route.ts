import { NextRequest, NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, deleteObject, uploadString, getDownloadURL } from 'firebase/storage';
import { authenticateRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        await authenticateRequest(req);
        const { leadText, mainText, philosophyLeadText, philosophyText, greetingText, image } = await req.json();

        const docRef = doc(db, 'TextContent', 'AboutText');
        const docSnap = await getDoc(docRef);

        let imageUrl = docSnap.exists() && docSnap.data().image ? docSnap.data().image : '';

        if (image && image !== imageUrl) {
            if (imageUrl) {
                const oldImageRef = ref(storage, imageUrl);
                await deleteObject(oldImageRef);
            }
            const imageRef = ref(storage, `images/aboutText_${Date.now()}.webp`);
            await uploadString(imageRef, image, 'data_url');
            imageUrl = await getDownloadURL(imageRef);
        }

        await updateDoc(docRef, {
            leadText,
            mainText,
            philosophyLeadText,
            philosophyText,
            greetingText,
            image: imageUrl,
        });

        return NextResponse.json({ message: 'Text saved successfully!' });
    } catch (e) {
        return NextResponse.json({ error: 'Error saving text: ' + (e as Error).message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await authenticateRequest(req);

        const docRef = doc(db, 'TextContent', 'AboutText');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            return NextResponse.json({ data: null });
        }
    } catch (e) {
        return NextResponse.json({ error: 'Error fetching text: ' + (e as Error).message }, { status: 500 });
    }
}

export const revalidate = 0;
