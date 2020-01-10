import styled from 'styled-components'


export const Container = styled.main `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// NavBar
export const Navigation = styled.nav `
  bottom: 0;
  width: 100vw;
  background-color: #79AEA3;
  padding-bottom: 2vh;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: fixed;



  a {
    padding-top: 2.5vh;
    text-decoration: none;
    cursor: pointer;
    color: #2C302E;
    font-family: 'Girassol', cursive;
    font-size: 2.4vw;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .activeLink {
    color: white;
  }

  img {
    width: 25%;
  }
`

export const DiarySection = styled.section `
  height: 30vh;
  background-color: red;
  margin: 1em .5em 1em;
  border: 3px solid black;
`


export const FourOhFourStyle = styled.div `
  display: flex;
  align-items: baseline;
  justify-items: center;
  flex-direction: column;
  height: 100vh;
  weight: 100vw;

  section {
    width: 100%;
    height: 50%;
    margin: auto;
    background-image:url('https://www.hover.com/blog/wp-content/uploads/2015/08/404-page-error.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }



`
