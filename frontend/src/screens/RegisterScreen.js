import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>会員登録</h1>
      {message && <Message variant='danger'>パスワードが一致しません</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        　　
        <Form.Group controlId='name'>
          <Form.Label>名前</Form.Label>
          <Form.Control
            type='name'
            placeholder='名前（匿名可）'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control
            type='email'
            placeholder='メールアドレス'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>パスワード</Form.Label>
          <Form.Control
            type='password'
            placeholder='パスワード'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmpassword'>
          <Form.Label>パスワードの確認</Form.Label>
          <Form.Control
            type='password'
            placeholder='確認パスワード'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          登録
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          アカウントをお持ちですか？　
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            ログイン
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
