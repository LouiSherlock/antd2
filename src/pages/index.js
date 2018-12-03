import React, { Fragment } from 'react';
import { Button, Card, Comment, Icon, List, Progress, Steps, Tooltip } from 'antd';
import { connect } from 'dva';

import styles from './index.css';
import moment from 'moment';


const Step = Steps.Step;

const data = [
  {
    actions: [<span>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

class Index extends React.PureComponent {
  state = {
    percent: 0,
  };



  render() {
    const { percent } = this.state;
    return (
      <Fragment>
        <Card style={{ height: 1500, background: '#f3f3f3' }}>
          <Steps current={1} size="small">
            <Step title="Finished" description="This is a description."/>
            <Step title="In Progress" description="This is a description."/>
            <Step title="Waiting" description="This is a description."/>
          </Steps>

          <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user"/>}/>
            <Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
            <Step status="process" title="Pay" icon={<Icon type="loading"/>}/>
            <Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
          </Steps>,

          <div>
            <Progress percent={30}/>
            <Progress percent={50} status="active"/>
            <Progress percent={70} status="exception"/>
            <Progress percent={100}/>
            <Progress percent={50} showInfo={false}/>
          </div>,

          <div>
            <Progress type="circle" percent={percent}/>
            <Progress type="circle" percent={70} status="exception"/>
            <Progress type="circle" percent={100}/>
          </div>,


          <Tooltip title="3 done / 3 in progress / 4 to do">
            <Progress strokeColor="#ff0000" percent={100} format={()=>"30"}  successPercent={30} />
          </Tooltip>,

          <List
            className="comment-list"
            header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            )}
          />,
        </Card>
      </Fragment>
    );
  }
}

export default connect(({ products }) => ({
  products,
}))(Index);
