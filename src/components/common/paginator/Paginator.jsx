import React from "react";
import styles from "./paginator.module.css";

const Paginator = ({
                       currentPage,
                       pageSize,
                       totalUsersCount,
                       onPageChanged,
                   }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pagination}>
            {
                pages.map(p => (
                    <button
                        key={`pages_btn+${p}`}
                        className={currentPage === p ? styles.active : ''}
                        onClick={() => {
                            onPageChanged(p)
                        }}>
                        {p}
                    </button>
                ))
            }
        </div>
    )
}
export default Paginator;
