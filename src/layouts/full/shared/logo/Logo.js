import { Link } from 'react-router-dom';
import BrandLogo from 'src/assets/images/logos/logonew1.png';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '165px',
  overflow: 'hidden',
  display: 'block',
  textAlign: 'center',
  margin: '0 auto',
}));

const Logo = () => {
  return (
    <LinkStyled>
      <img src={BrandLogo} alt="logo" width={'100%'} height={'100%'} />
    </LinkStyled>
  );
};

export default Logo;
