import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInventions } from '../store/selectors';
import { fetchInventions, setMaterialsForInvention } from '../store/actions';
import Invention from '../components/Invention';

export class InventionsScreen extends React.Component {
  static propTypes = {
    onMount: PropTypes.func,
    inventions: PropTypes.array.isRequired,
    onChangeMaterials: PropTypes.func,
  };

  static defaultProps = {
    onMount: () => {},
  };

  componentDidMount = () => {
    this.props.onMount();
  };

  render = () => {
    const { inventions, onChangeMaterials } = this.props;
    return (
      <div>
        {
          inventions.map((invention) =>
            <Invention
              {...invention}
              key={invention.id}
              onChangeMaterials={onChangeMaterials}
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
  onChangeMaterials: (id, materials) => dispatch(setMaterialsForInvention(id, materials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventionsScreen);
