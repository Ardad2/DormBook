import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, auth : {user}  ,  post: { post, loading }, match }) => {

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Loading />
  ) : (
    <Fragment>
      <Link to="/home" className="btn btn-primary">
        Go back to home
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost })(Post);
