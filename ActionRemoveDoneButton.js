/**
 * @flow
 */

import {connect} from 'react-redux';
import RemoveDoneButton from './RemoveDoneButton';
import {removeDone} from './todoActionCreators';

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(removeDone())
});

export default connect(null, mapDispatchToProps)(RemoveDoneButton);
