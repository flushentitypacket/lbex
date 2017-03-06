import React, { PropTypes } from 'react';
import TagsInput from 'react-tagsinput';

class StringSeparatedTagsInput extends React.Component {
  static propTypes = {
    separator: PropTypes.string.isRequired,
  };

  renderTag = (props) => {
    const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
    const { separator } = this.props;
    return (
      <span key={key} {...other}>
        {`${getTagDisplayValue(tag)}${separator}`}
        {!disabled &&
          <a className={classNameRemove} onClick={(e) => onRemove(key)} />
        }
      </span>
    );
  };

  render = () => <TagsInput renderTag={this.renderTag} {...this.props} />;
}

export default StringSeparatedTagsInput;
