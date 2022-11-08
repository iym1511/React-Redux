import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../module/memos";

const Memo = () => {
    // useState는 하나의 컴포넌트 안에서 사용할 때.
    // onChange를 통해서 바뀌는 값 / onChange로 값 받아올려면 이거 써야함 ★
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    // 값을 모든 컴포넌트에서 사용 (자주 바뀌지않게)
    // 리듀서를 이용한 화면 데이터 제어
    // useSelector 가져온 값은 dispatch가 일어나면 다시 가져온다 ★
    const memoList = useSelector((state)=>state.memoList) //memos.js에있는 memoList / state 접근 값을 가져옴
    // (● 불러오기만 함 ●)
    const dispatch = useDispatch()

    const addMemo = (e) => {
        e.preventDefault(); // submit은 누를떄마다 새로고침나서 그거 막아줌
        // memoList배열들을 여기서 사용할수 있게 그대로 다시 가져와준 값 (● 여기서 사용 ●) ★
        // 여기서 배열을 가져와야 아래 map에서 불러와서 사용가능 ★
        dispatch(addmemo({
            date: new Date(), 
            name: name, 
            text : text
        }))
    }
    return (  
        <div>
            <h1>방명록을 작성해주세요</h1>
            <hr />
            {/* 값 을 폼에다 전달   / submit버튼 작동시 addMemo실행 */}
            <form onSubmit={addMemo}>
                <label htmlFor="">이름</label>
                <input type="text" size={5} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
                <input type="submit" value="작성"/>
            </form>
            <hr />
            <ul> 
                {   // memoList는 배열                                   // new Data() 월 불러옴            일 불러옴
                    memoList.map((memo)=>(<li>{memo.name} : {memo.text} {memo.date.getMonth()+1}/{memo.date.getDate()}</li>))
                }
            </ul>
        </div>
    );
}
 
export default Memo;
