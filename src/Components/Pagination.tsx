import React from 'react';
import PageLink from "./PageLink";

interface Props {
    currentPage: number;
    perPage: number;
    total: number;
    showPages?: number;
    onPage: (firstResult: number, page: number) => any;
}

const Pagination: React.FC<Props> = ({ currentPage, total, perPage, onPage, showPages = 7 }) => {

    const range = (start: number, end: number) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const pageCount = React.useMemo(() => {
        return Math.ceil(total / perPage);
    }, [total, perPage]) as number;

    const paginationRange = React.useMemo(() => {
        if (pageCount < showPages) {
            return range(1, pageCount);
        }

        if (currentPage > pageCount - Math.floor(showPages / 2)) {
            return range((pageCount - showPages)+1, pageCount);
        }

        if (currentPage > Math.floor(showPages / 2)) {
            return range(currentPage - Math.floor(showPages / 2), currentPage + Math.floor(showPages / 2));
        }

        return range(1, showPages);

    }, [total, perPage, showPages, currentPage, pageCount]);

    const pageClicked = (page: number) => {
        onPage((page - 1) * perPage, page);
    }

    return (
        <nav>
            {pageCount > 1 && <ul className="pagination-sm pagination" role="menu">
                <PageLink label="First" page={1} isActive={false} isDisabled={currentPage === 1} onPage={pageClicked} />
                <PageLink label="Previous" page={currentPage-1} isActive={false} isDisabled={currentPage === 1} onPage={pageClicked} />
                {paginationRange!.map(page => (
                    <PageLink label={`${page}`} page={page} isActive={currentPage === page} isDisabled={false} onPage={pageClicked} />
                ))}
                <PageLink label="Next" page={currentPage+1} isActive={false} isDisabled={currentPage === pageCount} onPage={pageClicked} />
                <PageLink label="Last" page={pageCount} isActive={false} isDisabled={currentPage === pageCount} onPage={pageClicked} />
            </ul>}
        </nav>
    );
};

export default Pagination;
