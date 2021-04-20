import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className = 'justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>ログイン</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>ログイン</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shippping'>
                        <Nav.Link>住所</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>住所</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>支払い</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>支払い</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeOrder'>
                        <Nav.Link>注文確定</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>注文確定</Nav.Link>)}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
