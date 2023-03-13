import { SELECT_COURSE, UNSELECT_ } from "./courseActionTypes";

export function selectCourse(index){
    return {
        type: SELECT_COURSE,
        index
    };
}

export function unselectCourse(index){
    return {
        type: UNSELECT_COURSE,
        index
    };
}
