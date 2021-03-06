import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui button primary">
            <i className="thumbs up icon"></i>
          </div>
          <div className="ui button red">
            <i className="thumbs down icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
