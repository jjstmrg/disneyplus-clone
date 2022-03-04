import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/2414/1112414-h-ed6b6e825eb2"/>
      </Background>
      Detail
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`