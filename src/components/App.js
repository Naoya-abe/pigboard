import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <div className="ui container comments" style={{marginTop: '14px'}}>
        <ApprovalCard>
          <CommentDetail
            author="とんぺい"
            date="10月8日 4:00PM"
            description="今日の昼ごはんは美味しかったブゥ！"
            avator={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="師匠"
            date="10月3日 9:00AM"
            description="今日は午後から会議に参加しなければ。"
            avator={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="司書さん"
            date="9月27日 12:00PM"
            description="いい本が見つかったから、今度とんぺいちゃんに紹介してあげなきゃ。"
            avator={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
