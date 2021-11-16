import { connect } from 'react-redux';

import Screens from '_screens';
import * as AuthActions from '_actions/authAction';

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (data) => dispatch(AuthActions.deleteUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screens.HomeScreen);
