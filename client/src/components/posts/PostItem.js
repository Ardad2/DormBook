import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  dislike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="post bg-white p-1 my-1">
    <div className="post-header">
    <img className="round-img" src={avatar} alt="" /> 
      <Link to={`/profile/${user}`}>
       <p>{name}      <p className="post-date">{formatDate(date)}</p></p>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>

      {showActions && (
        <Fragment>
          <div className="post-buttons">
          <button
            onClick={() => addLike(_id)}
            type="button"
            className="btn btn-success"
          >
            
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>


          <Link to={`/home/${_id}`} className="btn btn-primary">
          <i class="fa fa-comment" aria-hidden="true"></i>{' '} 


            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-trash" />
            </button>
          )}
          </div>
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
