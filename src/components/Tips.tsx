import React from 'react';
import { useStores } from '@/stores';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: orange;
  padding: 10px;
  margin: 0 0 30px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
`

const Tips:React.FC = observer((props) => {
  const { UserStore } = useStores()
  return (
    <>
      {UserStore.currentUser ? null : <Wrapper>{props.children}</Wrapper>}
    </>
  )
})

export default Tips
