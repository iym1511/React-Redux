// 초기값

import { memo } from "react";

const initalState = {
    memoList : [
        {
            date : new Date(),
            name :"green",
            text : "방명록을 작성했습니다."
        }
    ]
}

// 액션함수         // 여기서 memo 받아옴
export const addmemo = (memo) => ({type:"addmemo", payload : memo})

// 리듀서 함수
const memos = (state=initalState, action) =>{
    switch (action.type){
        case 'addmemo':
            return {...state, memoList : state.memoList.concat(action.payload)} // memoList에 추가
        default :
            return state;
    }
}

export default memos;