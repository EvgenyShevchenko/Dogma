import {useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {Form,Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const [currentLogin, setCurrentLogin] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const {login, password} = useSelector(state => state.toolkit)
    const history = useHistory()

    const onChangeLogin = (e) => {
        setCurrentLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        history.push('/profile')
    }

    return (
        <div className="form_wrapper">
            <form className="form" onSubmit={e => onHandleSubmit(e)}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter login"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Login"
                        value={currentLogin}
                        onChange={(e) => onChangeLogin(e)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={currentPassword}
                        onChange={e => onChangePassword(e)}
                    />
                </FloatingLabel>
                <Button variant="primary"
                        type="submit"
                        className='w-25'
                        disabled={currentLogin !== login || currentPassword !== password}
                >
                    Войти
                </Button>
            </form>
        </div>
    )

}

export default LoginForm