import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { withRouter } from "react-router";
import UserLoginForm from './UserLoginForm.js'
import NavBar from './NavBar'
import {Container} from './styles'
import { allDiaries, oneDiary } from './api-data'
import Diaries from './Diaries'
import Diary from './Diary'
import FourOhFour from '../FourOhFour'


class Profile extends Component {

  state = {
    diaries: [],
    loaded: false,
    diary: ''
  }

  async componentDidMount(){
    const diaries = await allDiaries()

    if(diaries) {
      this.setState({
        diaries: diaries,
        loaded: true,

      })
    } else {
      this.setState({
        loaded: false
      })
    }
  }



  diaryShowPage = async (id) => {
   console.log('clicked', id);
   const diary = await oneDiary(id)

    localStorage.setItem('diary_chosen', JSON.stringify(diary))


   this.setState({
     diary
   })

   this.props.history.push('/diary')
 }



  render() {


    return (
      <Container>
        <NavBar />
        <Switch>
          <Route path={'/diaries'} render={() =>
              <Diaries
                loaded={this.state.loaded}
                diaries={this.state.diaries}
                diaryShowPage={this.diaryShowPage}
              /> }
            />
          <Route path={'/diary'} component={() => <Diary diary={this.state.diary}/>} />
          <Route path={'/login'} component={() => <UserLoginForm/>}/>
          <Route path={'*'} component={FourOhFour} />
        </Switch>
      </Container>
    )
  }
}

export default withRouter(Profile)
