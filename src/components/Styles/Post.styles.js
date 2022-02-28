import styled from 'styled-components'


export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background: rgba( 255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 0, 0.18);
  color: #fff;
`

export const PostInnerContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PostTitle = styled.h3`
  font-size: 1.5rem;
`

export const PostText = styled.p`
  font-size: 1rem;
`

// export const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   height: max-content;
//   width: 100%;
// `

export const PostImage = styled.img`
  max-width: 100%;
  height: auto;
` 

export const PostDetail = styled.h4`
  font-weight: bold;
`