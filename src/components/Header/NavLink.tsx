import { NavLinkContainer } from './styles'
import Link from 'next/link'

interface Props {
    title: string;
    path: string;
}

export default function NavLink ({ title, path}) {
    const isActive = true;

    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
            <a>{title}</a>
            </Link>
        </NavLinkContainer>
    )
}