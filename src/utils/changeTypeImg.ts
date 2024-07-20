import imageCompression from 'browser-image-compression';

export const convertToWebP = async (dataUrl: string): Promise<string> => {
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    const fileType = blob.type.split('/')[1];
    if (!['jpeg', 'jpg', 'png', 'HEIC'].includes(fileType.toLowerCase())) {
        return dataUrl;
    }

    const file = new File([blob], 'image.jpg', { type: blob.type });

    const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
        fileType: 'image/webp',
    });

    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(compressedFile);
    });
};
