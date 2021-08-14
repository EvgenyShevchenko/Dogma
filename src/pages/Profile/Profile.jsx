import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const Profile = () => {
    const login = useSelector(state => state.toolkit.login)

    return (
        <Container className='profile__wrapper'>
            <div className='profile'>
                <h1 className='fw-bold'>{login}</h1>
                <Link to="/">На главную</Link>
            </div>
        </Container>
    )
}

export default Profile