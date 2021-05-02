import React, { MutableRefObject, useRef } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '@/stores';

const Login = observer(() => {
  const { AuthStore } = useStores()
  const inputRef: MutableRefObject<HTMLInputElement> = useRef() as MutableRefObject<HTMLInputElement>
  const bindChange = () => {
    AuthStore.setUsername(inputRef.current.value)
  }
  return (
    <>
      <h1>Login: {AuthStore.values.username}</h1>
      <input onChange={bindChange} ref={inputRef}/>
    </>
  )
})

export default Login
