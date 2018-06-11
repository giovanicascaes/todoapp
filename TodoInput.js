/**
 * @flow
 */

import {connect} from 'react-redux';
import Input from './Input';
import {updateText, add} from './todoActionCreators';

const mapStateToProps = ({text}) => ({text});

const mapDispatchToProps = dispatch => ({
    updateInputText: text => {
        dispatch(updateText(text));
    },
    addTodo: text => {
        if (text.trim()) {
            dispatch(add(text));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
