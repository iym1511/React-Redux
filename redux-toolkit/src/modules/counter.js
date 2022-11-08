import { createSlice } from "@reduxjs/toolkit";

// createSlice에 초기값과 reducer 값을 넣는다.
export const counter = createSlice({
    name: 'counter',
    // 초기값
    initialState : { 
        value : 4
    },
    // 실행할 reducer >  객체형태로!
    reducers : {
        increment : (state)=>{
            // 툴킷을 이용하면 상태보존이 되기때문에 바로 값에 접근해서 수정가능
            state.value+=1;
        },
        incrementByAmount : (state, action)=>{
            // 외부에서 값을 들고 오고싶을때 action.payload를 통해 들고옴

            state.value += action.payload
        }
    }
});


// 액션 타입을 합수로 만들어서 내보내기
export const {increment, incrementByAmount} = counter.actions

// toolkit 에는 thunk가 내장되있기때문에 설치하지않고 사용 가능하다
// thunk 사용하는 방식과 동일하게 사용 : 함수형으로 작성
// thunk로 작성한 함수의 이름을 액션함수를 사용하는 것과 동일하게 사용 
// : dispatch(increaseAsync=())
export const increaseAsync=()=>(dispatch)=>{
    // counter.actions을 통해 내보내준 increment를 함수형식으로 작성해서 넣어준다
    setTimeout(()=>{dispatch(increment())},1000)
}


// 디스패치를 따로 내보내줌
export default counter.reducer