import { useSelector } from "react-redux";

const Memo = () => {
    const memolist = useSelector((state)=>state.memo.memolist)
    return (  
        <div>       {/** memo.js에서 값을 불러옴 */}
            {memolist[0].title} {memolist[0].text} {memolist[0].id}
        </div>
    );
}
 
export default Memo;