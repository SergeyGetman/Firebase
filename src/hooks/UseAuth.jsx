import {useSelector} from "react-redux";

export function UseAuth(){
    const {email, token, id} = useSelector(state => state)
    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}