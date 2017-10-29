import React from 'react';
import styles from './articleSelect.css';
import moment from 'moment';
import {Icon, Modal } from 'antd';
import AsnycFetch from '../../../utils/common';
import {HOST} from '../../../utils/config';


class articleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      previewVisible:false,
      previewImage:'',
    })
  }

  handleCancel = () => this.setState({ previewVisible: false })


  render() {
    const { article,history,match}=this.props
    return (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.titleWrap}>
              <p className={styles.title} onClick={()=>{
                // console.log('click  id  is ',article._id)
                AsnycFetch('get',HOST+'api/addBlogReview'+'?blogId='+article._id)
                    .then((res)=>{
                      console.log('result',res)
                    })
                history.push({
                  pathname: `${match.url}`+'blog/'+article._id,
                })
              }}>{article.blogTitle}</p>
              <p className={styles.subTitle}>{moment(article.createAt).format('YYYY-MM-DD HH:mm:ss')}
                <span style={{marginRight:'4px'}}/>阅读量:{article.blogReview}
              </p>
            </div>
          </div>
          <div className={styles.thumbnail}>
            <img src={article.blogPicture} height={125} width={200} onClick={()=>{this.setState({ previewImage:article.blogPicture,previewVisible: true,})}}/>
            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
            </Modal>
          </div>
        </div>
    );
  }
}


articleSelect.propTypes = {};

export default articleSelect;
