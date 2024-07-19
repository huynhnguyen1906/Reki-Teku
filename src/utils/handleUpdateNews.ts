import axios from 'axios';
import { toast } from 'react-toastify';
import { HandleSendParams, OutputData } from '@/types/SaveNews';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { convertToWebP } from '@/utils/changeTypeImg';

export const handleUpdate = async (
    { editor, activeButton, router }: HandleSendParams,
    setLoading: (loading: boolean) => void,
    documentId: string,
) => {
    if (!editor) {
        console.error('Editor instance is null');
        return;
    }

    try {
        setLoading(true);
        const outputData = await editor.save();

        const blocks = await Promise.all(
            outputData.blocks.map(async (block) => {
                if (block.type === 'image' && block.data.file.url) {
                    try {
                        const webpDataUrl = await convertToWebP(block.data.file.url);
                        const storageRef = ref(storage, `images/${Date.now()}.webp`);
                        const snapshot = await uploadString(storageRef, webpDataUrl, 'data_url');
                        const downloadURL = await getDownloadURL(snapshot.ref);
                        block.data.file.url = downloadURL;
                    } catch (uploadError) {
                        console.error('Error uploading image:', uploadError);
                    }
                }
                return block;
            }),
        );

        const updatedData: OutputData = { ...outputData, blocks };

        const response = await axios.post('/api/update-news', {
            news_data: updatedData,
            news_type: activeButton,
            id: documentId,
        });

        if (response.status === 200) {
            toast.success('記事の更新が完了しました');
            router.push('/admin/news');
        } else {
            toast.error('記事の更新に失敗しました');
        }
    } catch (error) {
        console.log('Updating failed: ', error);
        toast.error('記事の更新に失敗しました');
    } finally {
        setLoading(false);
    }
};
