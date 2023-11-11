import { convertFromRaw, EditorState } from "draft-js";

export const convertRawToEditorState = (rawData: string) => {
    const parsedData = JSON.parse(rawData);
    const contentState = convertFromRaw(parsedData);
    return EditorState.createWithContent(contentState);
  };
