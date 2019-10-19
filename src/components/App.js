import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import '../styles/App.css';
import Tonpei from '../tonpei.png';
import jsonplaceholder from '../api/jsonplaceholder';

class App extends React.Component {
  state = {posts: []};

  getPosts = async () => {
    try {
      const postsResponse = await jsonplaceholder.get('/posts');
      this.setState({posts: postsResponse.data});
    } catch {
      window.alert('投稿内容の取得に失敗しました。');
    }
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="ui container comments" style={{marginTop: '14px'}}>
        {this.state.posts.map(post => (
          <ApprovalCard key={post.id}>
            <CommentDetail
              author="とんぺい"
              date={`${faker.date.month()} 2019`}
              description={post.body}
              avator={Tonpei}
            />
          </ApprovalCard>
        ))}
      </div>
    );
  }
}

export default App;
