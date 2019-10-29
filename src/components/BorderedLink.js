import styled from '@emotion/styled';
import { Link } from 'gatsby';

const BorderedLink = styled(Link)`
  display: inline-flex;
  color: #dbdbd3;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.sans};

  @media screen and (max-width: 40em) {
    height: 36px;
    padding: 4px 10px;
    border-radius: 18px;
  }

  @media screen and (min-width: 40em) {
    height: 24px;
    padding: 2px 8px;
    border-radius: 12px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export default BorderedLink;
