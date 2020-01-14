import React, {Component} from 'react';
import { DiaryShowPage } from './styles'

export default function Diary(){

  let diaryBackup = JSON.parse(localStorage.getItem('diary_chosen'))

  return (

    <DiaryShowPage>
      <h1> {diaryBackup.title} </h1>

      <p>{diaryBackup.content}</p>
    </DiaryShowPage>
  )
}
