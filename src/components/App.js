import React from 'react';
import faker from 'faker';
import axios from 'axios';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

class App extends React.Component {
  state = {user: [], posts: []};

  getPosts = async () => {
    try {
      const postsResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(postsResponse.data);
    } catch {
      window.alert('投稿内容の取得に失敗しました。');
    }
  };

  getUsers = async () => {
    try {
      const usersResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(usersResponse.data);
    } catch (error) {
      window.alert('ユーザの取得に失敗しました。');
    }
  };

  componentDidMount() {
    this.getPosts();
    this.getUsers();
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
