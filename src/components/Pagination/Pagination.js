import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageNumber, info, updatePageNumber }) => {

    let pageChange = (data) => {
        updatePageNumber(data.selected + 1)
    };

    const [width, setWidth] = useState(window.innerWidth)


    return (
        <>
        <style jsx>
            {`
            a {
                color: white; text-decoration: none;
            }
            @media (max-width: 768px) {
                .pagination {font-size: 12px}

                .next,
                .prev {display: none}
            }
            @media (max-width: 768px) {
                .pagination {font-size: 14px}
            }
            `}
            </style>
        </>
    )
}