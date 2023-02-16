import {useSelector} from "react-redux";

export function UseAuth(){
    const {email, token, id} = useSelector(state => {
        console.log('this is state', state)
       return  state?.user
    })
    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}