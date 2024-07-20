import { EditorConfig } from '@editorjs/editorjs/types/configs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Checklist from '@editorjs/checklist';

class CustomImageTool extends Image {
    static firstImageRendered = false;

    render() {
        const wrapper = super.render();
        const caption = wrapper.querySelector('.cdx-input');

        if (caption && !CustomImageTool.firstImageRendered) {
            CustomImageTool.firstImageRendered = true;
            caption.style.display = 'none';
        }

        return wrapper;
    }
}

export const resetFirstImageRendered = () => {
    CustomImageTool.firstImageRendered = false;
};
const editorConfig: EditorConfig = {
    holder: 'editorjs',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true,
            config: {
                placeholder: 'タイトルを入力...',
                defaultLevel: 2,
            },
        },
        list: List,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
                placeholder: 'テキストを入力するか、リンクを貼り付ける',
            },
        },
        image: {
            class: CustomImageTool,
            config: {
                uploader: {
                    uploadByFile(file: File) {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                if (event.target) {
                                    resolve({
                                        success: 1,
                                        file: {
                                            url: event.target.result as string,
                                        },
                                    });
                                } else {
                                    reject(new Error('ファイルの読み取りに失敗しました。'));
                                }
                            };
                            reader.onerror = () => {
                                reject(new Error('ファイルの読み取りに失敗しました。'));
                            };
                            reader.readAsDataURL(file);
                        });
                    },
                },
            },
        },
        embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                    youtube: true,
                    coub: true,
                    twitter: true,
                    facebook: true,
                    instagram: true,
                },
            },
        },
        table: Table,
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: '引用を入力...',
                captionPlaceholder: '引用元を入力...',
            },
        },
        code: Code,
        checklist: Checklist,
        delimiter: Delimiter,
    },

    i18n: {
        messages: {
            ui: {
                blockTunes: {
                    toggler: {
                        'Click to tune': 'クリックして調整',
                        'or drag to move': 'またはドラッグして移動',
                    },
                },
                inlineToolbar: {
                    converter: {
                        'Convert to': '変換する',
                    },
                },
                toolbar: {
                    toolbox: {
                        Add: '追加',
                    },
                },
            },
            toolNames: {
                Text: 'テキスト',
                Heading: '見出し',
                List: 'リスト',
                Image: '画像',
                Table: 'テーブル',
                Embed: '埋め込み',
                Code: 'コード',
                Quote: '引用',
                Delimiter: '区切り線',
                Checklist: 'チェックリスト',
            },
            tools: {
                header: {
                    'Heading 1': '見出し 1',
                    'Heading 2': '見出し 2',
                    'Heading 3': '見出し 3',
                    'Heading 4': '見出し 4',
                    'Heading 5': '見出し 5',
                    'Heading 6': '見出し 6',
                },
                list: {
                    Ordered: '順序付き',
                    Unordered: '順序なし',
                },
                quote: {
                    'Enter a quote': '引用を入力...',
                    'Enter a caption': '引用元を入力...',
                },
                checklist: {
                    'To do': 'チェックリスト',
                },
                image: {
                    'With border': '枠線あり',
                    'With background': '背景あり',
                    'Stretch image': '画像をストレッチ',
                },
            },
            blockTunes: {
                delete: {
                    Delete: '削除',
                    'Click to delete': 'もう一度クリックして削除',
                },
                moveUp: {
                    'Move up': '上へ移動',
                },
                moveDown: {
                    'Move down': '下へ移動',
                },
            },
        },
    },

    data: {
        time: new Date().getTime(),
        blocks: [
            {
                type: 'image',
                data: {
                    file: {},
                },
            },
            {
                type: 'header',
                data: {
                    level: 2,
                },
            },
            {
                type: 'paragraph',
                data: {},
            },
        ],
    },
};

export default editorConfig;
