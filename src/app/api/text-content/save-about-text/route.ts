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

        if (docSnap.exists() && docSnap.data().image) {
            const oldImageRef = ref(storage, docSnap.data().image);
            await deleteObject(oldImageRef);
        }

        let imageUrl = '';
        if (image) {
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

export const revalidate = 0;
