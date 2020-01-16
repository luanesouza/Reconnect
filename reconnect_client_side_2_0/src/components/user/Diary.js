import React, {Component, useState} from 'react';
import BackButton from '../BackButton'
import { withRouter } from "react-router";
import { DiaryShowPage } from './styles'


function Diary(props){
  window.scrollTo(0, 0);

  let diaryBackup = JSON.parse(localStorage.getItem('diary_chosen'))

  const formatter = (diaryContent) => {
    let paragraph = diaryContent.split('. ').map( content => <p>{content}</p>)
    return paragraph;
  }


  return (
    <DiaryShowPage>
      <BackButton goBack={props.goBack}/>
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
