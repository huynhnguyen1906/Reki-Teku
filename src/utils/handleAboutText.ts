import { db, storage } from '@/lib/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, deleteObject, uploadString, getDownloadURL } from 'firebase/storage';

export const handleUpdateAboutText = async (
    leadText: string,
    mainText: string,
    philosophyLeadText: string,
    philosophyText: string,
    greetingText: string,
    image: string,
) => {
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
};
