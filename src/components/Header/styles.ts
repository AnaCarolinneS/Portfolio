import { lighten } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface NavLinkProps {
isActive: boolean;
}

export const Container = styled.header`
widht: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
bordem-bottom: 1px bottom ${({ theme }) => theme.backgroundLight} 

ul {
    display: flex;
    gap: 2rem;
    align-items: center;
}
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

a {
    text-transform: uppercase;
    color: ${props => props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
        color: ${props => props.isActive
             ? lighten(0.2, props.theme.primary) :
             lighten(0.2, props.theme.textHighlight)}
    }
}

`;