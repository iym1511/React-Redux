import {useLocation} from 'react-router-dom'

const User = () => {
    const location = useLocation();
    const user = location.state.user;
    return (  
        <div>
            <h1>유저페이지입니다.</h1>
            <p>{location.state.name}</p>
            <p>{location.state.email}</p>
            <img src={location.state.photo}/>
        </div>
    );
}
 
export default User;