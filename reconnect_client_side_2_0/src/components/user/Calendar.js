import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class CalendarComponent extends Component {
  state = {
    date: new Date(),
  }

  onClickDay = (ev) => {
    console.log('the date chosen was', ev);
  }

  onChange = date => {
    console.log('the date chosen is', date);
    let dateArray = date.join().split(',')
    console.log(dateArray);
    const initialDate = dateArray[0].split(' ');
    const endDate = dateArray[1].split(' ');
    console.log(initialDate);
    console.log(endDate);

    if(initialDate[0] == 'Sat') {
      console.log('Its a weekend', initialDate[0]);
    }


    // let result = initialDate.includes(endDate)
    // //
    // console.log(result, 'initial');
    // console.log(endDate, 'end');

    // if(date[0] == date[1]) {
    //   console.log('one day chosen');
    // } else {
    //   console.log(date);
    // }
   this.setState({ date })
  }

  render() {
    return (
      <div>
        <Calendar
          className='calendar'
          onChange={this.onChange}
          value={this.state.date}
          selectRange={true}
        />
      </div>
    );
  }
}
