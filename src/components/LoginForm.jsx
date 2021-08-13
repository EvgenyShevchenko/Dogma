import {useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";


const LoginForm = () => {
    const [currentLogin, setCurrentLogin] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const {login, password} = useSelector(state => state.toolkit)

    const onChangeLogin = (e) => {
        setCurrentLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(currentLogin === login && currentPassword === password){
            console.log('ok')
        }
    }

    return (
        <div className="form_wrapper">
            <form className="form">
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
                        className="w-25 fw-bold"
                        onClick={e => onHandleSubmit(e)}
                >
                    Login
                </Button>
            </form>
        </div>
    )

}

export default LoginForm