import authStore from '@/store/authStore';
import BlogNameSetting from '../BlogNameSetting/BlogNameSetting';
import DescriptionSetting from '../DescriptionSetting/DescriptionSetting';
import EmailSetting from '../EmailSetting/EmailSetting';
import NameSetting from '../NameSetting/NameSetting';
import ThumbSetting from '../ThumbSetting/ThumbSetting';
import { StyledSettingsContainer } from './Settings-Styled';
import useGetUserInfo from '@/query/userinfo/useGetUserInfo';

const Settings = () => {
  const accessToken = authStore((state) => state.accessToken);
  const { userInfo } = useGetUserInfo(accessToken);

  if (userInfo) {
    return (
      <StyledSettingsContainer>
        <ThumbSetting thumbnail={userInfo.thumbnail} />
        <NameSetting name={userInfo.name} />
        <EmailSetting email={userInfo.email} />
        <BlogNameSetting blogname={userInfo.blogName} />
        <DescriptionSetting description={userInfo.description} />
      </StyledSettingsContainer>
    );
  }
};

export default Settings;
