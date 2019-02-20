import React, { Component } from 'react';
import styled, { css } from 'styled-components'


export default class Schedule extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  };
  render() {
    const LessonsMas = [[{hour:9,
                          min:0,
                          duration:85},
                          {hour:14,
                            min:10,
                            duration:45},
                          {hour:20,
                            min:15,
                            duration:30
                          }
    ],
    [{hour:11,
      min:15,
      duration:200
    },
    {hour:15,
      min:0,
      duration:75},
      {hour:17,
        min:10,
        duration:45},
      {hour:19,
        min:15,
        duration:67
      }
],
[{hour:10,
  min:35,
  duration:100
},
{hour:13,
  min:0,
  duration:25},
  {hour:16,
    min:30,
    duration:45},
  {hour:18,
    min:15,
    duration:87
  }
]];
    const Time = Array.from({length: 13}, (v, k) => k+1)
    return (
      
      <div style={{display:'flex', padding:'10px'}}>
        <LessonsTable>
        {console.log(Time)}
            <TimeColumn>
              {Time.map((time,i)=>
                <TimeTd key={i}>
                    {time+8}
                </TimeTd>)}
            </TimeColumn>
            {LessonsMas.map((dayLesson,i) => <DayLessons key={i}>{dayLesson.map((lesson,key)=>
              <Lesson key={key} hour={lesson.hour} min={lesson.min} duration={lesson.duration}><div>начало в {lesson.hour}:{lesson.min==0?'00':lesson.min}</div> 
                                                                                              длительность:{lesson.duration}минут</Lesson>
              )}</DayLessons>)}
              <DayLessons>
                <Lesson index='15' time='30'></Lesson>
              </DayLessons>
        </LessonsTable>
      </div>
    )
  }
}


const LessonsTable = styled.div`
    display:flex;
    color: palevioletred;

`

const DayLessons = styled.div`
  display:block;
  position: relative;
  margin:10px;
  justify-content:center;
  color: blueviolet;
  position:relative;
  width: 150px;
`
const TimeColumn = styled.div`
  display: flex;
  margin:5px;
  justify-content:center;
  color: white;
  flex-direction: column;
  position:relative;

`
const Lesson = styled.div`
  display:flex;
  border-radius: 5px;
  position: absolute;;
  top: ${props => `${(props.hour-9)*59+26+props.min}px`};
  color: blueviolet;
  min-width:120px;
  min-height: ${props =>`${props.duration}px`};
  background-color: greenyellow;
  margin: 1px 0;
  align-items:center;
  flex-direction: column;
  justify-content: center;
`
const TimeTd = styled.div`
  display:flex;
  color: blueviolet;
  position:relative;
  min-width:30px;
  min-height: 59px;
  background-color: greenyellow;
  margin: 0 10px;
  align-items: center;
  justify-content:center;
  border-bottom: 1px solid tomato;
  &::before{
    display:block;
    content:'';

    left:100%;
    top: 50%;
    position:absolute;

    width: 95vw;
    height: 0;
    border-top:1px solid green;
  }
  &::after{
    display:block;
    content:'';
    left:0;
    top: 100%;
    position:absolute;

    width: 95vw;
    height: 0;
    border-top:1px solid blue;
  }
`
