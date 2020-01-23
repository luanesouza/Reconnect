import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { withRouter } from "react-router";
import UserLoginForm from './UserLoginForm.js'
import {Container} from './styles'
import { allDiaries, oneDiary } from './api-data'
import Diaries from './Diaries'
import MyAppointments from './MyAppointments'
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

   this.props.history.push(`/diary`)
 }

 goBack = () => {
   this.props.history.goBack()
 }



  render() {

    return (
      <Container>
        <Switch>
          <Route exact path={'/'} render={() =>
            <UserLoginForm/> }
            />

            <Route path={'/diaries'} render={() =>
                <Diaries
                  loaded={this.state.loaded}
                  diaries={this.state.diaries}
                  diaryShowPage={this.diaryShowPage}
                /> }
            />

            <Route path={'/diary'} render={() =>
                <Diary
                  diary={this.state.diary}
                  goBack={this.goBack}/>}
            />

            <Route path={'/appointments'} render={() =>
              <MyAppointments
                goBack={this.goBack}/> }
              />

            <Route path={'*'} render={() =>
              <FourOhFour />}
            />
        </Switch>
      </Container>
    )
  }
}

export default withRouter(Profile)
