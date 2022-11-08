// 작성한 리덕스 모듈을 하나로 묶어서 사용
import {combineReducers} from "redux";

// 작성한 리덕스 모듈을 가져옴
import counter, { counterSaga } from "./counter";
import memo from "./memo";
import news from "./news";
import newsSagaReducer, {newsSaga} from "./newsSaga";

// 리덕스 사가의 내용을 연결해서 사용
import {all} from "redux-saga/effects"

// 작성한 리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({counter, memo, news, newsSagaReducer});
export function* rootSaga () {
    // takeEvery는 모든 "increase"를  처리
    yield all([counterSaga()])
}     

export default rootReducer;