import Container from "react-bootstrap/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const Home = () => {

    return (
        <Container className="home__wrapper">
            <h1 className="home__title">Dogma</h1>
            <LoginForm/>
        </Container>
    )
}

export default Home