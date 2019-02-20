import React from 'react'
import { Progress, Button } from 'antd';
import './index.css'
const ButtonGroup = Button.Group;

class App extends React.Component {
  state = {
    percent: 0,
  }

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }

  render() {
    return (
      <div>
        <div className={'card'}>
          <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
        </div>
        <div className={'card'}>
          <Progress type="circle" percent={100} format={() => 'Done'} />
        </div>
        <div className={'card'}>
          <Progress type="circle" percent={25} format={() => 'Done'} />
        </div>
        <div style={{ width: 170 }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="active" />
          <Progress percent={70} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>

        <div>
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default App;