import React from "react";
import ReactPaginate from "react-paginate";
function Pagination({ pageCount, onChange }) {
	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel=">"
			onPageChange={onChange}
			pageRangeDisplayed={2}
			marginPagesDisplayed={3}
			pageCount={pageCount}
			previousLabel={"<"}
			activeClassName={"active"}
		/>
	);
}
export default React.memo(Pagination);
