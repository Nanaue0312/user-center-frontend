import { GITHUB_LINK } from '@/Constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Nanaue出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Github',
          title: <GithubOutlined />,
          href: GITHUB_LINK,
          blankTarget: true,
        },
        {
          key: 'Planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com/dweb2/index/group/51122858222824',
          blankTarget: true,
        },
        {
          key: 'ICP',
          title: '浙ICP备2023008633号-1',
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
