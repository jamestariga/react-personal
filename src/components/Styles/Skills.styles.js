import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  height: auto;
  padding: 2rem;
  margin: 0 10rem 10rem 10rem;
  background: rgba( 255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 0, 0.18);

  @media (max-width: 1198px) {
    margin: 0 5rem 5rem 5rem;
  }

  @media (max-width: 1129px) {
    grid-template-columns: repeat(2, 1fr);;
  }

  @media (max-width: 650px) {
    margin: 0 2rem 2rem 2rem;
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`