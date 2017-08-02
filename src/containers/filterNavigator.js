import { connect } from 'react-redux';
import { blogTypeVisibilityFilter } from '../actions/index';
import Navigator from '../components/public/navigator/navigator';


const mapDispatchToProps = (dispatch) => ({
  onclick: (filter)=> {
    dispatch(blogTypeVisibilityFilter(filter))
  }
})

const filterNavigator = connect(null,mapDispatchToProps)(Navigator)

export default filterNavigator
