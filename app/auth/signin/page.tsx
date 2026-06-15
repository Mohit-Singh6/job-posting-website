import {login} from '@/lib/actions/auth'; 

export default function Signin () {

    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={login}>SignIn with github</button>
        </div>
    )
}