import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Title } from './Section.styled';
import { theme } from 'constants/theme';

export const Section = ({ title, children }) => (
  <Box as="section" px={[2, 2, 4, 6]} py={[3, 3, 4, 4]}>
    <Box
      mx="auto"
      pt={[3, 3, 3, 4]}
      pb={[4, 4, 4, 4]}
      px={[3, 3, 4, 4]}
      bg="white"
      boxShadow={theme.boxShadow.second}
      borderRadius={theme.radii.normal}
      maxWidth={['100%', '100%', '768px', '1000px']}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  </Box>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
