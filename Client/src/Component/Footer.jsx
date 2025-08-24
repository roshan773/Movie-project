import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5 shadow-sm">
            <Container>
                <Row className="text-center">
                    <Col>
                        <p className="mb-0">© 2025 <strong>MovieMania</strong> 🎥. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer