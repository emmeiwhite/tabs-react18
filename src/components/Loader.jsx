import styled from 'styled-components'

export default function Loader() {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.article`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 10px solid #ccc;
  border-top-color: #007bff;
  border-bottom-color: #17a2b8;
  animation: rotate 0.5s linear infinite;
  margin: 10rem auto;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
