import { reducerTestWrapper } from "src/utils/tests/testWrappers";
import actionNames from "src/enums/actionList";
import editor, * as selectors from "src/reducers/editor";

const defaultState = editor(undefined, {});
const editorTest = reducerTestWrapper(editor);

describe ("editor reducer", () => {
    editorTest("Original state is returned", defaultState, {}, defaultState);
    
    let name = "Original Name";
    editorTest("isEditing is updated", {
                isEditing: false,
                initialName: null,
                currentName: null
            }, {
                type: actionNames.startCategoryRename,
                name
            }, {
                isEditing: true,
                initialName: name,
                currentName: name
            });
    
    
    editorTest("Current name is updated is updated", {
                isEditing: true,
                initialName: name,
                currentName: name
            }, {
                type: actionNames.categoryNameChanged,
                name: "new name"
            }, {
                isEditing: true,
                initialName: name,
                currentName: "new name"
            });
    
    editorTest("Current name is updated is updated", {
                isEditing: true,
                initialName: name,
                currentName: "new name"
            }, {
                type: actionNames.cancelCategoryRename
            }, {
                isEditing: false,
                initialName: null,
                currentName: null
            });
    
    
});