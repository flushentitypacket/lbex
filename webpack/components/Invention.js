import React, { PropTypes } from 'react';

class Invention extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    bits: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    materials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
  };

  static defaultProps = {
    bits: [],
    materials: [],
  };

  render = () => {
    const { id, title, description, username, email, bits, materials } = this.props;
    return (
      <div>
        <p><strong>id</strong> {id}</p>
        <p><strong>title</strong> {title}</p>
        <p><strong>description</strong> {description}</p>
        <p><strong>username</strong> {username}</p>
        <p><strong>email</strong> {email}</p>
        <p><strong>bits</strong> {bits.map(bit => bit.name).join(', ')}</p>
      </div>
    );
  }
}

export default Invention;
