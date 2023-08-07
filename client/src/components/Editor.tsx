import * as React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
export interface IEditorProps {}

export default function Note(props: IEditorProps) {
  const [editorState, setEditorState] = React.useState(() => {
    return EditorState.createEmpty();
  });
  const onEditorStateChange = (e) => {
    setEditorState(e);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={(e) => onEditorStateChange(e)}
        placeholder="Write something!"
      />
    </div>
  );
}
