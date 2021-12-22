import { connect } from 'react-redux';

import Screens from '_screens';
import * as AuthActions from '_actions/authAction';

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(AuthActions.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screens.CartScreen);
