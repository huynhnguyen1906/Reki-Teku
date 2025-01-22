import { EditorConfig } from '@editorjs/editorjs/types/configs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';

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
                Delimiter: '区切り線',
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
                type: 'paragraph',
                data: {},
            },
        ],
    },
};

export default editorConfig;
