import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://lumiere-a.akamaihd.net/v1/images/g_encanto_1_21512_9af56359.jpeg?region=0%2C0%2C1300%2C730"/>
      </Background>
      <ImageTitle>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dean3eh-f651a54d-0c3b-4693-a8b0-491eb14ee6ce.png/v1/fill/w_1280,h_607,strp/disney_s_encanto_logo_png__by_mintmovi3_dean3eh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA3IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZWFuM2VoLWY2NTFhNTRkLTBjM2ItNDY5My1hOGIwLTQ5MWViMTRlZTZjZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6rhJHGNO451-slczTaiFawf7YZYJ0Yn0jnFGUzaeD9M"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-white.png"/>
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2022 . 1h 42m . Musical,Kids * Malay, Indonesian, English, Thai
      </SubTitle>
      <Description>
        This is description ..............
      </Description>
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
  z-index: -1;
  opacity: 0.8;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top=20px;

  img{
    width: 100%;
    height: 100%;
    object-fix: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;

`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right:22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color= rgb(249 249 249)
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  span{
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);
`

const SubTitle = styled.div`
  color: rgb(249, 249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 760px;

`