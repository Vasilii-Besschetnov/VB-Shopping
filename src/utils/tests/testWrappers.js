import { reducerTest } from "redux-jest";

export const reducerTestWrapper = reducer => (desc, stateBefore, action, stateAfter) =>
    reducerTest(desc, reducer, stateBefore, action, stateAfter);