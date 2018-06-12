/**
 * @flow
 */

import {connect} from 'react-redux';
import Todo from './Todo';
import {remove, toggle} from './todoActionCreators';

const mapDispatchToProps = (dispatch, {index}) => ({
    onRemove: () => dispatch(remove(index)),
    onToggle: () => dispatch(toggle(index))
});

export default connect(null, mapDispatchToProps)(Todo);
