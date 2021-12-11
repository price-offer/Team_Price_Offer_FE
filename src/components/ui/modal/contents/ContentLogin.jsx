import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import Button from '@components/templates/Button'

const LoginContent = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <div className="modal-header">
        <h2>로그인</h2>
        <p className="login">구매자가 제안해요, Offer!</p>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit} className="modal-body_form">
          <div className="modal-body_form-input email">
            <h3>이메일</h3>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="이메일"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <Button type="submit" className="modal-body_btn email">
            이메일로 로그인
          </Button>
        </form>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn kakao">카카오로 로그인</Button>
        </div>
      </div>
    </>
  )
}

export default LoginContent
