import {connect} from "react-redux";
import Input from "./Input";
import {add} from "./actionCreators";

const mapDispatchToProps = dispatch => ({
    addTodo: input => {
        if (!input._lastNativeText.trim()) {
            dispatch(add(input._lastNativeText));
            input._lastNativeText = '';
        }
    }
});

export default connect(null, mapDispatchToProps)(Input);
