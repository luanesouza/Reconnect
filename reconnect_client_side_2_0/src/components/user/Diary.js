import React, {Component} from 'react';
import { DiaryShowPage } from './styles'

export default function Diary(){

  let diaryBackup = JSON.parse(localStorage.getItem('diary_chosen'))

  return (
    <DiaryShowPage>
      { diaryBackup

        ?

        <>
          <h1> {diaryBackup.title} </h1>
          <p> {diaryBackup.content} </p>
        </>

        :
        <h1>Failed to load. Please try again </h1>
      }
    </DiaryShowPage>
  )
}
