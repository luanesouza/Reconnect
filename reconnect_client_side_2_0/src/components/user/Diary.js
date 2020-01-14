import React, {Component} from 'react';
import { DiaryShowPage } from './styles'

export default function Diary(){
  let diaryBackup = JSON.parse(localStorage.getItem('diary_chosen'))

  const formatter = (diaryContent) => {
    let array = diaryContent.split('. ')
    let paragraph = array.map( content => <p>{content}</p>)
    console.log(paragraph);
    return paragraph;

  }


  return (
    <DiaryShowPage>
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
