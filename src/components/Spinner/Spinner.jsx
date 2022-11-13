import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from 'components/Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </SpinnerWrapper>
  );
};
