import React, {Component, useState} from 'react';

import { withRouter } from "react-router";
import { DiaryShowPage } from './styles'


function Diary(props){
  window.scrollTo(0, 0);
  const [scroll, setScroll] = useState(false)

  let diaryBackup = JSON.parse(localStorage.getItem('diary_chosen'))

  const formatter = (diaryContent) => {
    let paragraph = diaryContent.split('. ').map( content => <p>{content}</p>)
    return paragraph;

  }

  const goBack = (props) => {
    console.log(props);
};


  return (
    <DiaryShowPage>
      <button onClick={(props) => goBack(props)}>
        <img src='https://img.icons8.com/pastel-glyph/2x/circled-left.png'/>
      </button>

      { diaryBackup

        ?

        <>
          <h1> {diaryBackup.title} </h1>
          <p> {formatter(diaryBackup.content)} </p>
        </>

        :
        <h1>Failed to load. Please try again </h1>
      }
    </DiaryShowPage>
  )
}


export default withRouter(Diary)
