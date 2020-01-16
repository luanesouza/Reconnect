import styled from 'styled-components'


export const Container = styled.main `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(247,191,180, .4);
`

// NavBar
export const Navigation = styled.nav `
  bottom: 0;
  width: 100vw;
  background-color: #7DAF9C;
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
    width: 20px;
  }
`

// Form

export const LoginFormSection = styled.section `
  margin-top: 1rem;
  padding: 10px;
  float: right;

  input {
    width: 90%;
    padding: .5rem;
    margin-bottom: 1rem;
    border-left: 0 none;
    border-top: 0 none;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-color: #F7BFB4;
  }

  input:focus {
    border-color: #C9E4CA;
  }

  #login-button {
    float: right;
    align-self: flex-end;
    color: gray;

  }

  button:hover {
    cursor: pointer;
    border-width: 0 .5px 2px;
  }

  form {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
`

export const SignupFormSection = styled.section `
  margin: auto;
  width: 70%;
  padding: 10px;
  background-color: white;
  text-align:center;

  h1 {
    padding: 1rem;
    font-size:  1rem;
    color: white;
  }

  form {
    margin: auto;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    width: 70%;
  }

  input {
    padding: .5rem;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #F7BFB4;
  }

  input:focus {
    border-color: #C9E4CA;
  }

  #join-us {
    padding-top: 2rem;
    font-size: 50%;
  }

img {
  width: 40%;
  border-color: coral;
  background-color: white;
  border: 2px solid #C9E4CA;
  border-radius: 50%;
  margin: 1rem;
}

button {
  margin-top: 1.5rem;
  border-width: 0 0 2px;
  border-color: #F7BFB4;
  background-color: white;
  color: gray;
}

button:hover {
  cursor: pointer;
  border-width: 0 .5px 2px;
}

`
//Diary Section

export const DiaryShowPage = styled.section `
  background-color: rgba(201,228,202, .4);
  margin: 3rem .6rem;

  h1 {
    text-align: center;
    padding-top: .5rem;
    margin-bottom: 2rem;
    font-family: 'Dosis', sans-serif;
    text-shadow: 1px 1px white;
    color: black;
    font-size: 10vw;
  }

  p {
    padding: .5rem;
    text-align: justify;
  }

  img {
    width: 15%;
    bottom: 0;
    padding-bottom: 2vh;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    position: fixed;
    /* background-color: white; */
    right: 0;
  }

}
`



export const DiarySection = styled.section `
  height: 30vh;
  /* background-color: rgba(247,191,180, .5);
   */
  background: url(${props => props.image_url});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1em .5em 5em;
  border: 3px solid rgba(201,228,202, .5);

  h1 {
    text-align: center;
    font-weight: bold;
    font-family: 'Dosis', sans-serif;
    text-shadow: 1px 1px black;
    color: white;
    font-size: 10vw;
    letter-spacing: 3px;
    background-color: rgba(201,228,202, .5);
  }
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
