import React, {Component} from 'react';
import { allDiaries, oneDiary } from './api-data'
import { DiarySection } from './styles'
import Diary from './Diary'

export default class Diaries extends Component {
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
        loaded: true
      })
    } else {
      this.setState({
        loaded: false
      })
    }
  }

  async diaryShowPage(id){
    console.log('clicked', id);
    const diary = await oneDiary(id)
    console.log(diary);

    this.setState({
      diary
    })
    this.props.history.push('/diary')
  }

  render(){
    const diaries = this.state.diaries.map(diary =>  (
      <DiarySection
        image_url={diary.image_url}
        key={diary.title}
        onClick={() => this.diaryShowPage(diary.id)}
        >
        <Diary diary={diary}/>
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
