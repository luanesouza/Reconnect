import React, {Component} from 'react';
import { DiarySection } from './styles'

import { allDiaries, oneDiary } from './api-data'
import Diary from './Diary'

export default function Diaries(props){


      const diaries = props.diaries.map( (diary, idx) => (
        <DiarySection key={idx} image_url={diary.image_url}  onClick={() => props.diaryShowPage(diary.id)}>
          <h1>{diary.title} </h1>
        </DiarySection >
        )
      )
    return (
      <section>
        {
          props.loaded
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
