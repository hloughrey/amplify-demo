import styled from 'styled-components';

export const StyledFooter = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) => theme.palette.background.default};
    padding: ${({ theme }) => theme.spacing(3, 0)};
    margin-top: ${({ theme }) => theme.spacing(2)};
`;
