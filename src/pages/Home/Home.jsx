import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {Row,Button} from "react-bootstrap";

const Home = () => {

    return (
        <Container className="home__wrapper">
            <h1 className="home__title">Dogma</h1>
            <Row>
                <div className="form_wrapper">
                <form className="form">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className="w-25">
                        Submit
                    </Button>
                </form>
                </div>
            </Row>
        </Container>
    )
}

export default Home