import {useSelector, useDispatch} from "react-redux";
import { increment, incrementByAmount } from "../modules/counter";

const Count = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    return (  
        <div>
            {count}
            <button onClick={()=>dispatch(increment())}>+1</button>
                            {/* incrementByAmount()의 인수값으로 들어가는 값은 payload로 전달됨 */}
            <button onClick={()=>{dispatch(incrementByAmount(10))}}>+10</button>
        </div>
    );
}

export default Count;