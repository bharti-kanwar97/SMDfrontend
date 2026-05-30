import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
   ClassicEditor,
  Essentials,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  Link,
  List,
  BlockQuote,
  Table,
  TableToolbar,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  AutoImage,
  MediaEmbed,
  HorizontalLine,
  Undo,
  PasteFromOffice,
  FindAndReplace,
  SelectAll,
  Font,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
    Indent,
    IndentBlock,
      ListProperties,
       Alignment
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function UseCKEditor({ value, onChange }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: 'GPL',
        plugins: [
          Essentials,
          Paragraph,
          Heading,
          Bold,
          Italic,
          Underline,
          Strikethrough,
          Code,
          Subscript,
          Superscript,
          Link,
          List,
          BlockQuote,
          Table,
          TableToolbar,
          Image,
          ImageToolbar,
          ImageCaption,
          ImageStyle,
          ImageResize,
          AutoImage,
          MediaEmbed,
          HorizontalLine,
          Undo,
          PasteFromOffice,
          FindAndReplace,
          SelectAll,
          Font,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
    Indent,
    IndentBlock,
    ListProperties,
    Alignment
        ],
        toolbar: [
          'undo',
          'redo',
          '|',
          'findAndReplace',
          'selectAll',
          '|',
          'heading',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'code',
          'subscript',
          'superscript',
          '|',
          'link',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'horizontalLine',
           '|',
        'fontFamily',
    'fontSize',
    'fontColor',
    'fontBackgroundColor',
     '|',
    'outdent',
    'indent',
    'alignment'
        ],
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
          ]
        },
        list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  }
      }}
    />
  );
}