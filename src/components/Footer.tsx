import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
`
function Footer () {
  return (
    <StyledFooter>
      © 2022 Burt. All rights reserved.
    </StyledFooter>
  );
}

export default Footer;
