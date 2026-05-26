/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NodgNARAzAdADDKFIEY4FY4gJwCYRwq4AsAbOugBy6VR7mmWlTrZzbbFRQqm5Sli2UsggBTAHbI4YYCjAyZ8pQF1IAY2IoARtp4QVQA=
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './style.css';

const LICENSE_KEY =
    'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODAwOTkxOTksImp0aSI6IjU5Y2MxOWZhLTRiODYtNDg4Ni04MjYwLTZlOWM3ZWQyMzg2YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImQ2OGFlN2M2In0.PXy4Z4a8B7zXYCKqjn9Q_hT76zL6P_gxOz7Fu6Z1OFfn0vLsDqkEdOQBqlY6xaXMVUqv15bQv8OXAO2AT8G_2A';

/**
 * Create a free account to test Uploadcare with a trial: https://app.uploadcare.com/accounts/signup/
 *
 * If you are interested in using Uploadcare on production, contact us: https://ckeditor.com/contact-sales/
 */
export default function UseCKEditor({ data, onChange }) {
const UPLOADCARE_PUBKEY = '<YOUR_UPLOADCARE_PUBKEY>';

    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const cloud = useCKEditorCloud({ version: '48.1.0', premium: true });

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const { ClassicEditor, editorConfig } = useMemo(() => {
        if (cloud.status !== 'success' || !isLayoutReady) {
            return {};
        }

        const {
            ClassicEditor,
            Autosave,
            Essentials,
            Paragraph,
            AutoLink,
            Bold,
            Code,
            FindAndReplace,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            Italic,
            Link,
            Mention,
            SpecialCharacters,
            SpecialCharactersArrows,
            SpecialCharactersCurrency,
            SpecialCharactersEssentials,
            SpecialCharactersLatin,
            SpecialCharactersMathematical,
            SpecialCharactersText,
            Underline,
            Indent,
            IndentBlock,
            List,
            TodoList,
            ListProperties,
            Table,
            TableToolbar,
            TableLayout,
            PlainTableOutput,
            TableProperties,
            TableCellProperties,
            TableColumnResize,
            TableCaption,
            ImageInsertViaUrl,
            ImageBlock,
            ImageToolbar,
            AutoImage,
            ImageUpload,
            ImageInsert,
            PictureEditing,
            ImageStyle,
             Image
        
        } = cloud.CKEditor;
        const { CaseChange, FormatPainter, MultiLevelList, Uploadcare } = cloud.CKEditorPremiumFeatures;

        return {
            ClassicEditor,
            editorConfig: {
                root: {
                    placeholder: 'Type or paste your content here!'
                        
                },
                toolbar: {
                    items: [
                        'undo',
                        'redo',
                        '|',
                        'formatPainter',
                        'caseChange',
                        'findAndReplace',
                        '|',
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'code',
                        '|',
                        'specialCharacters',
                        'link',
                        'insertImage',
                        'insertTable',
                        'insertTableLayout',
                        '|',
                        'bulletedList',
                        'numberedList',
                        'multiLevelList',
                        'todoList',
                        'outdent',
                        'indent'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    AutoImage,
                    AutoLink,
                    Autosave,
                    Bold,
                    CaseChange,
                    Code,
                    Essentials,
                    FindAndReplace,
                    FontBackgroundColor,
                    FontColor,
                    FontFamily,
                    FontSize,
                    FormatPainter,
                    ImageBlock,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageStyle,
                    ImageToolbar,
                    ImageUpload,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    List,
                    ListProperties,
                    Mention,
                    MultiLevelList,
                    Paragraph,
                    PictureEditing,
                    PlainTableOutput,
                    SpecialCharacters,
                    SpecialCharactersArrows,
                    SpecialCharactersCurrency,
                    SpecialCharactersEssentials,
                    SpecialCharactersLatin,
                    SpecialCharactersMathematical,
                    SpecialCharactersText,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableLayout,
                    TableProperties,
                    TableToolbar,
                    TodoList,
                    Underline,
                    Uploadcare
                ],
                licenseKey: LICENSE_KEY,
                fontFamily: {
                    supportAllValues: true
                },
                fontSize: {
                    options: [10, 12, 14, 'default', 18, 20, 22],
                    supportAllValues: true
                },
                image: {
                    toolbar: ['imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight'],
                    styles: {
                        options: ['alignBlockLeft', 'block', 'alignBlockRight']
                    }
                },
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                list: {
                    properties: {
                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                },
                mention: {
                    feeds: [
                        {
                            marker: '@',
                            feed: [
                                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
                            ]
                        }
                    ]
                },
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                },
                uploadcare: {
                    pubkey: UPLOADCARE_PUBKEY
                }
            }
        };
    }, [cloud, isLayoutReady]);

    useEffect(() => {
        if (editorConfig) {
            configUpdateAlert(editorConfig);
        }
    }, [editorConfig]);

    return (
        <div className="main-container">
            <div className="editor-container editor-container_classic-editor">
                <div className="editor-container__editor">
                    {ClassicEditor && editorConfig && <CKEditor
  editor={ClassicEditor}
  config={editorConfig}
  data={data}
  onChange={onChange}
/>}
                </div>
            </div>
        </div>
    );
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
    if (configUpdateAlert.configUpdateAlertShown) {
        return;
    }

    const isModifiedByUser = (currentValue, forbiddenValue) => {
        if (currentValue === forbiddenValue) {
            return false;
        }

        if (currentValue === undefined) {
            return false;
        }

        return true;
    };

    const valuesToUpdate = [];

    configUpdateAlert.configUpdateAlertShown = true;

    if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
        valuesToUpdate.push('LICENSE_KEY');
    }

    if (!isModifiedByUser(config.uploadcare?.pubkey, '<YOUR_UPLOADCARE_PUBKEY>')) {
        valuesToUpdate.push('UPLOADCARE_PUBKEY');
    }

    if (valuesToUpdate.length) {
        window.alert(
            [
                'Please update the following values in your editor config',
                'to receive full access to Premium Features:',
                '',
                ...valuesToUpdate.map(value => ` - ${value}`)
            ].join('\n')
        );
    }
}