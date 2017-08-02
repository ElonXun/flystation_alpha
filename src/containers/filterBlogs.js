import { connect } from 'react-redux';
import HomeContent from '../components/public/homeContent/homeContent';

const getVisibleBlogs = (blogs, filter) => {
  switch (filter) {
    case 'SHOW_ALL_BLOG':
      return blogs
    case 'SHOW_REALSTUFF':
      return blogs.filter(t => t.blogType === 0)
    case 'SHOW_NOTE':
      return blogs.filter(t => t.blogType === 1)
    case 'SHOW_TRAVEL':
      return blogs.filter(t => t.blogType === 2)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  blogs: getVisibleBlogs(state.blogs,state.blogTypeVisibilityFilter)
})

const FilterBlogs = connect(mapStateToProps)(HomeContent)

export default FilterBlogs