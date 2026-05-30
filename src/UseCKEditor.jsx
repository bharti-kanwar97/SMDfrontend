

// import { useState, useEffect, useRef, useMemo } from 'react';
// import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

// import './style.css';

// const LICENSE_KEY =
// 	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODAwOTkxOTksImp0aSI6IjU5Y2MxOWZhLTRiODYtNDg4Ni04MjYwLTZlOWM3ZWQyMzg2YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImQ2OGFlN2M2In0.PXy4Z4a8B7zXYCKqjn9Q_hT76zL6P_gxOz7Fu6Z1OFfn0vLsDqkEdOQBqlY6xaXMVUqv15bQv8OXAO2AT8G_2A';


// export default function UseCKEditor({ data, onChange }) {
// const UPLOADCARE_PUBKEY = '<YOUR_UPLOADCARE_PUBKEY>';

// 	const [isLayoutReady, setIsLayoutReady] = useState(false);
// 	const cloud = useCKEditorCloud({ version: '48.1.0', premium: true });

// 	useEffect(() => {
// 		setIsLayoutReady(true);

// 		return () => setIsLayoutReady(false);
// 	}, []);

// 	const { ClassicEditor, editorConfig } = useMemo(() => {
// 		if (cloud.status !== 'success' || !isLayoutReady) {
// 			return {};
// 		}

// 		const {
// 			ClassicEditor,
// 			Autosave,
// 			Essentials,
// 			Paragraph,
// 			AutoLink,
// 			Bold,
// 			Code,
// 			FindAndReplace,
// 			FontBackgroundColor,
// 			FontColor,
// 			FontFamily,
// 			FontSize,
// 			Italic,
// 			Link,
// 			Mention,
// 			SpecialCharacters,
// 			SpecialCharactersArrows,
// 			SpecialCharactersCurrency,
// 			SpecialCharactersEssentials,
// 			SpecialCharactersLatin,
// 			SpecialCharactersMathematical,
// 			SpecialCharactersText,
// 			Underline,
// 			Indent,
// 			IndentBlock,
// 			List,
// 			TodoList,
// 			ListProperties,
// 			Table,
// 			TableToolbar,
// 			TableLayout,
// 			PlainTableOutput,
// 			TableProperties,
// 			TableCellProperties,
// 			TableColumnResize,
// 			TableCaption,
// 			ImageInsertViaUrl,
// 			ImageBlock,
// 			ImageToolbar,
// 			AutoImage,
// 			ImageUpload,
// 			ImageInsert,
// 			PictureEditing,
// 			ImageStyle,
// 			 Image
		
// 		} = cloud.CKEditor;
// 		const { CaseChange, FormatPainter, MultiLevelList, Uploadcare } = cloud.CKEditorPremiumFeatures;

// 		return {
// 			ClassicEditor,
// 			editorConfig: {
// 				root: {
// 					placeholder: 'Type or paste your content here!'
						
// 				},
// 				toolbar: {
// 					items: [
// 						'undo',
// 						'redo',
// 						'|',
// 						'formatPainter',
// 						'caseChange',
// 						'findAndReplace',
// 						'|',
// 						'fontSize',
// 						'fontFamily',
// 						'fontColor',
// 						'fontBackgroundColor',
// 						'|',
// 						'bold',
// 						'italic',
// 						'underline',
// 						'code',
// 						'|',
// 						'specialCharacters',
// 						'link',
// 						'insertImage',
// 						'insertTable',
// 						'insertTableLayout',
// 						'|',
// 						'bulletedList',
// 						'numberedList',
// 						'multiLevelList',
// 						'todoList',
// 						'outdent',
// 						'indent'
// 					],
// 					shouldNotGroupWhenFull: false
// 				},
// 				plugins: [
// 					AutoImage,
// 					AutoLink,
// 					Autosave,
// 					Bold,
// 					CaseChange,
// 					Code,
// 					Essentials,
// 					FindAndReplace,
// 					FontBackgroundColor,
// 					FontColor,
// 					FontFamily,
// 					FontSize,
// 					FormatPainter,
// 					ImageBlock,
// 					ImageInsert,
// 					ImageInsertViaUrl,
// 					ImageStyle,
// 					ImageToolbar,
// 					ImageUpload,
// 					Indent,
// 					IndentBlock,
// 					Italic,
// 					Link,
// 					List,
// 					ListProperties,
// 					Mention,
// 					MultiLevelList,
// 					Paragraph,
// 					PictureEditing,
// 					PlainTableOutput,
// 					SpecialCharacters,
// 					SpecialCharactersArrows,
// 					SpecialCharactersCurrency,
// 					SpecialCharactersEssentials,
// 					SpecialCharactersLatin,
// 					SpecialCharactersMathematical,
// 					SpecialCharactersText,
// 					Table,
// 					TableCaption,
// 					TableCellProperties,
// 					TableColumnResize,
// 					TableLayout,
// 					TableProperties,
// 					TableToolbar,
// 					TodoList,
// 					Underline,
// 					Uploadcare
// 				],
// 				licenseKey: LICENSE_KEY,
// 				fontFamily: {
// 					supportAllValues: true
// 				},
// 				fontSize: {
// 					options: [10, 12, 14, 'default', 18, 20, 22],
// 					supportAllValues: true
// 				},
// 				image: {
// 					toolbar: ['imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight'],
// 					styles: {
// 						options: ['alignBlockLeft', 'block', 'alignBlockRight']
// 					}
// 				},
// 				link: {
// 					addTargetToExternalLinks: true,
// 					defaultProtocol: 'https://',
// 					decorators: {
// 						toggleDownloadable: {
// 							mode: 'manual',
// 							label: 'Downloadable',
// 							attributes: {
// 								download: 'file'
// 							}
// 						}
// 					}
// 				},
// 				list: {
// 					properties: {
// 						styles: true,
// 						startIndex: true,
// 						reversed: true
// 					}
// 				},
// 				mention: {
// 					feeds: [
// 						{
// 							marker: '@',
// 							feed: [
// 								/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
// 							]
// 						}
// 					]
// 				},
// 				table: {
// 					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
// 				},
// 				uploadcare: {
// 					pubkey: UPLOADCARE_PUBKEY
// 				}
// 			}
// 		};
// 	}, [cloud, isLayoutReady]);

// 	useEffect(() => {
// 		if (editorConfig) {
// 			configUpdateAlert(editorConfig);
// 		}
// 	}, [editorConfig]);

// 	return (
// 		<div className="main-container">
// 			<div className="editor-container editor-container_classic-editor">
// 				<div className="editor-container__editor">
// 					{ClassicEditor && editorConfig && <CKEditor
//   editor={ClassicEditor}
//   config={editorConfig}
//   data={data}
//   onChange={onChange}
// />}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// /**
//  * This function exists to remind you to update the config needed for premium features.
//  * The function can be safely removed. Make sure to also remove call to this function when doing so.
//  */
// function configUpdateAlert(config) {
// 	if (configUpdateAlert.configUpdateAlertShown) {
// 		return;
// 	}

// 	const isModifiedByUser = (currentValue, forbiddenValue) => {
// 		if (currentValue === forbiddenValue) {
// 			return false;
// 		}

// 		if (currentValue === undefined) {
// 			return false;
// 		}

// 		return true;
// 	};

// 	const valuesToUpdate = [];

// 	configUpdateAlert.configUpdateAlertShown = true;

// 	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
// 		valuesToUpdate.push('LICENSE_KEY');
// 	}

// 	if (!isModifiedByUser(config.uploadcare?.pubkey, '<YOUR_UPLOADCARE_PUBKEY>')) {
// 		valuesToUpdate.push('UPLOADCARE_PUBKEY');
// 	}

// 	if (valuesToUpdate.length) {
// 		window.alert(
// 			[
// 				'Please update the following values in your editor config',
// 				'to receive full access to Premium Features:',
// 				'',
// 				...valuesToUpdate.map(value => ` - ${value}`)
// 			].join('\n')
// 		);
// 	}
// }











/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NodgNARAzAdADDALBSVEA5EE4BMidaJECMIUxOArJnDlOjgGyMjpQ4hYjeNylEoIAUwB2KOGGDEwEidLkBdVMQCGOIQGMAJhAVA=
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './style.css';

/**
 * This is a 24-hour evaluation key. Create a free account to use CDN: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODAyNzE5OTksImp0aSI6IjE1NDZlYzU4LWI1NWUtNDBhNC1hMTIwLWVhYmRjMjNlMjM5ZCIsImxpY2Vuc2VkSG9zdHMiOlsiKi53ZWJjb250YWluZXIuaW8iLCIqLmpzaGVsbC5uZXQiLCIqLmNzcC5hcHAiLCJjZHBuLmlvIiwiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIiwic2giXSwibGljZW5zZVR5cGUiOiJldmFsdWF0aW9uIiwidmMiOiIwYTQ1MjM4MSJ9.CelctSKKtfL9m-1RFRurlf6zsCf4vh6f9nY0ufH0I35F4RMMq6QSeAi-PT3zbuYXH0eXCWQI4udAdPkHQdZ3zA';

export default function UseCKEditor({data, onChange}) {
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const cloud = useCKEditorCloud({ version: '48.1.1' });

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
			Bold,
			Italic,
			Link,
			AutoLink,
			Underline,
			Strikethrough,
			Code,
			Subscript,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Highlight,
			Heading,
			Indent,
			IndentBlock,
			ImageBlock,
			ImageToolbar,
			ImageStyle,
			ImageInsertViaUrl,
			AutoImage,
			LinkImage,
			List,
			TodoList,
			Table,
			TableToolbar,
			PlainTableOutput,
			TableCaption,
			HorizontalLine,
			BlockQuote,
			Emoji,
			Mention
		} = cloud.CKEditor;

		return {
			ClassicEditor,
			editorConfig: {
				root: {
					placeholder: 'Type or paste your content here!',
					initialData:
						'<h2>Evaluation license key 🔑</h2>\n<p>\n\tAn evaluation key is being used in this editor. <a href="https://portal.ckeditor.com/checkout?plan=free">\n\t\tCreate an account to use your own license keys.\n\t</a>\n</p>\n\n<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n'
				},
				toolbar: {
					items: [
						'undo',
						'redo',
						'|',
						'heading',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'strikethrough',
						'subscript',
						'code',
						'|',
						'emoji',
						'horizontalLine',
						'link',
						'insertImageViaUrl',
						'insertTable',
						'highlight',
						'blockQuote',
						'|',
						'bulletedList',
						'numberedList',
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
					BlockQuote,
					Bold,
					Code,
					Emoji,
					Essentials,
					FontBackgroundColor,
					FontColor,
					FontFamily,
					FontSize,
					Heading,
					Highlight,
					HorizontalLine,
					ImageBlock,
					ImageInsertViaUrl,
					ImageStyle,
					ImageToolbar,
					Indent,
					IndentBlock,
					Italic,
					Link,
					LinkImage,
					List,
					Mention,
					Paragraph,
					PlainTableOutput,
					Strikethrough,
					Subscript,
					Table,
					TableCaption,
					TableToolbar,
					TodoList,
					Underline
				],
				licenseKey: LICENSE_KEY,
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
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
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
				}
			}
		};
	}, [cloud, isLayoutReady]);

	return (
		<div className="main-container">
			<div className="editor-container editor-container_classic-editor">
				<div className="editor-container__editor">
					{ClassicEditor && editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}
				</div>
			</div>
		</div>
	);
}






