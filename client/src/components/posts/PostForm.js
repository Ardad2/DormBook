import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ auth: { user }, addPost }) => {
  const [text, setText] = useState(("Whats on your mind " + `${user && user.name}` + " ?"));
  const defaultText = text;
  return (
    <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
    <div></div>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder="Whats on your mind?"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </div>
  );
};



PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
