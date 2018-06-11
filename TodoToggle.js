/**
 * @flow
 */

import {connect} from 'react-redux';
import Todo from './Todo';
import {toggle} from './todoActionCreators';

const mapDispatchToProps = (dispatch, {index}) => ({
    onToggle: () => dispatch(toggle(index))
});

export default connect(null, mapDispatchToProps)(Todo);
