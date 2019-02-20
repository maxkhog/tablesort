import React from 'react';
import styled, { css } from 'styled-components'
export default class index extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
          hover: false,
          start: props.data.start,
          end: props.data.end,
          current: props.data.current
        };
    }
    render() {
        const {start,end,current} = this.state;
      return (
        <Container>
            {start},
            {current},
            {end},
            <Progress/>
        </Container>
      )
    }
}


const Progress = styled.div`


  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`
