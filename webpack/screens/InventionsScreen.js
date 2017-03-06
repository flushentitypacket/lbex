import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInventions } from '../store/selectors';
import { fetchInventions, setInvention, updateInvention } from '../store/actions';
import Invention from '../components/Invention';

export class InventionsScreen extends React.Component {
  static propTypes = {
    onMount: PropTypes.func,
    inventions: PropTypes.array.isRequired,
    onChangeInvention: PropTypes.func,
  };

  static defaultProps = {
    onMount: () => {},
  };

  componentDidMount = () => {
    this.props.onMount();
  };

  render = () => {
    const { inventions, onChangeInvention } = this.props;
    return (
      <div>
        {
          inventions.map((invention) =>
            <Invention
              {...invention}
              key={invention.id}
              onChange={onChangeInvention}
            />
          )
        }
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  inventions: getInventions(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchInventions()),
  onChangeInvention: (invention) => {
    dispatch(setInvention(invention));
    dispatch(updateInvention(invention));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InventionsScreen);
