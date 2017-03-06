import React, { PropTypes } from 'react';
import StringSeparatedTagsInput from './StringSeparatedTagsInput';

const COMMA_KEY_CODE = 188;
const SPACE_KEY_CODE = 32;

class Invention extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
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
    onChangeMaterials: PropTypes.func.isRequired,
  };

  static defaultProps = {
    bits: [],
    materials: [],
  };

  handleChangeMaterials = (materialNames) => {
    const { id, onChangeMaterials } = this.props;
    const materials = materialNames.map(name => ({ name }));
    onChangeMaterials(id, materials);
  }

  render = () => {
    const { id, title, description, username, email, bits, materials } = this.props;
    const materialNames = materials.map(material => material.name);
    return (
      <div>
        <p><strong>id</strong> {id}</p>
        <p><strong>title</strong> {title}</p>
        <p><strong>description</strong> {description}</p>
        <p><strong>username</strong> {username}</p>
        <p><strong>email</strong> {email}</p>
        <p><strong>bits</strong> {bits.map(bit => bit.name).join(', ')}</p>
        <div><strong>materials</strong>
          <StringSeparatedTagsInput
            value={materialNames}
            onChange={this.handleChangeMaterials}
            addKeys={[COMMA_KEY_CODE, SPACE_KEY_CODE]}
            onlyUnique
            separator={', '}
          />
        </div>
      </div>
    );
  }
}

export default Invention;
