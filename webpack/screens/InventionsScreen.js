import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInventions } from '../store/selectors';
import Invention from '../components/Invention';

class InventionsScreen extends React.Component {
  static propTypes = {
    inventions: PropTypes.array.isRequired,
  };

  render = () => {
    const { inventions } = this.props;
    return (
      <div>
        { inventions.map((invention) => <Invention {...invention} />) }
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  inventions: getInventions(state),
});

export default connect(mapStateToProps)(InventionsScreen);
