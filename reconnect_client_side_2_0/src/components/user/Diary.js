import React, {Component} from 'react';
import {allDiaries} from './api-data'
import { DiarySection } from './styles'

export default class Diary extends Component {
  state = {
    diaries: []
  }

  async componentDidMount(){
    const diaries = await allDiaries()

    this.setState({
      diaries
    })
  }

  render(){
    const diaries = this.state.diaries.map(diary =>  (
      <DiarySection>
        <h1> {diary.title} </h1>
      </DiarySection>

    ))

    return (
      <section>
        <div>
          <iframe src="https://giphy.com/embed/QvH4uLw6QfrtE5BxXr" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
      </section>
    )
  }
}
