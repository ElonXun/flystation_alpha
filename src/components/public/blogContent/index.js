import React from 'react';
import styles from './blogContent.css';
import { Avatar } from 'antd';


const articleSelect = ({ }) => {
  return (
      <div className={styles.blogWrap}>
        <div className={styles.blogTitleContainer}>
          <h1 className={styles.blogTitle}>JavaScript函数节流和函数防抖之间的区别</h1>
        </div>
        <div className={styles.avatar}>
          <Avatar size="large" icon="user" />
          <span className={styles.avatarText}>潘小闲也</span>
          <span>·</span>
          <span className={styles.blogCreateTime}>2017-09-03 22:28:12</span>
        </div>
        <div className={styles.blogContent}>
           <div dangerouslySetInnerHTML={{__html:'<p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">首先解释下lantern &nbsp;</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">他和平常大家用的vpn翻墙软件不同，lantern其实类似于曾经很流行的p2p下载模式，只是把以前各种用来分享的资源换成了各种网站而已,就像大家曾经用的迅雷。</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">安装上lantern以后，墙内的人通过lantern想要浏览墙外网站的时候，就会通过墙外安装了lantern的人的网络进行访问。当然，除了这些志愿为你提供服务的lantern墙外安装者外，lantern官方自己也有服务器提供了大量的流量，进一步确保了墙内浏览者的网络浏览速度。</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">但是lantern毕竟不是vpn，他并没有改变你的固定IP地址，原来的IP地址在中国，就还是中国。而vpn一般采用的是固定IP，专用服务器来进行连接的，类似于lantern自己的服务器，所以vpn通常在国内容易被封。</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">通俗讲就是在每次你想访问facebook，youtube，google这类国外网站的前，先打开lantern（ 以墙外志愿者分享的网络去访问）就行了，网络访问速度几乎是和原来一样的。</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">lantern的出现给想访问国外网站获取信息的人一个极大的方便。</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">大家都用用看吧 &nbsp; mac，Windows，android 均可使用 除了IPhone</p><p style=\"margin-top: 0px; margin-bottom: 22px; padding: 0px; color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, Simsun; font-size: 17px; white-space: normal;\">附上链接：https://github.com/getlantern/lantern</p><p><br/></p>'}}/>
        </div>
      </div>
  );
};

articleSelect.propTypes = {};

export default articleSelect;
