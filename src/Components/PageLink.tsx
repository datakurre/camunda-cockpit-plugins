import React from 'react';

interface Props {
    label: string;
    page: number;
    isActive: boolean;
    isDisabled: boolean;
    onPage: (page: number) => any;
}

const PageLink: React.FC<Props> = ({ label, page, isDisabled, isActive, onPage }) => {

    const pageClicked = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
        e.preventDefault();
        if (!isDisabled) {
            onPage(page);
        }
    }

    return (
        <li role="menuitem" className={`pagination-page ${isActive ? "active" : ""} ${isDisabled ? "disabled" : ""}`} key={label}>
            <a href="#" className={isDisabled ? "disabled" : ""} onClick={(e) => pageClicked(e, page)}>{label}</a>
        </li>
    );
};

export default PageLink;
