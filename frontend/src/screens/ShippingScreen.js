import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [prefecture, setPrefecture] = useState(shippingAddress.prefecture)
  const [address, setAddress] = useState(shippingAddress.address)
  const [building, setBuilding] = useState(shippingAddress.building)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ prefecture, address, building, postalCode }))
    history.push('/payment')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='prefecture'>
          <Form.Label>都道府県</Form.Label>
          <Form.Control
            type='prefecture'
            placeholder='都道府県'
            value={prefecture}
            required
            onChange={(e) => setPrefecture(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>住所</Form.Label>
          <Form.Control
            type='address'
            placeholder='市、区、丁、番地、号'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='building'>
          <Form.Label>住所２</Form.Label>
          <Form.Control
            type='building'
            placeholder='マンション、アパート名、部屋番号、等'
            value={building}
            required
            onChange={(e) => setBuilding(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>郵便番号</Form.Label>
          <Form.Control
            type='postalCode'
            placeholder='○○○ー○○○○'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          住所を確定する
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
