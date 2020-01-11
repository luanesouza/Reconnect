import React, {Component} from 'react';
import {allDiaries} from './api-data'
import { DiarySection } from './styles'

export default class Diary extends Component {
  state = {
    diaries: [],
    loaded: false
  }

  async componentDidMount(){
    const diaries = await allDiaries()
    if(diaries) {
      this.setState({
        diaries: diaries,
        loaded: true
      })
    } else {
      this.setState({
        loaded: false
      })
    }

  }

  render(){
    const diaries = this.state.diaries.map(diary =>  (
      <DiarySection image_url={diary.image_url} key={diary.title}>
        <h1> {diary.title} </h1>
      </DiarySection>

    ))

    return (
      <section>
        {
          this.state.loaded
          ?
          diaries
          :
          <div className="giphy-embed">
            <iframe id='giphy-embed' src="https://giphy.com/embed/l4FGIO2vCfJkakBtC" frameBorder="0"  allowFullScreen></iframe>
          </div>
        }

      </section>
    )
  }
}
