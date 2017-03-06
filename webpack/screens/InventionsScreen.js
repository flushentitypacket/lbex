import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInventions } from '../store/selectors';
import { fetchInventions } from '../store/actions';
import Invention from '../components/Invention';

class InventionsScreen extends React.Component {
  static propTypes = {
    onMount: PropTypes.func,
    inventions: PropTypes.array.isRequired,
  };

  static defaultProps = {
    onMount: () => {},
  };

  componentDidMount = () => {
    this.props.onMount();
  };

  render = () => {
    const { inventions } = this.props;
    return (
      <div>
        { inventions.map((invention) => <Invention key={invention.id} {...invention} />) }
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  inventions: getInventions(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchInventions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventionsScreen);
