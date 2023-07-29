import React from "react";
import { useDispatch } from "react-redux";
import { prev, next } from "../../Redux/actions";
import "./paginado.css";

export default function Paginate({ numPage, cantPage }) {
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <div className="paginate">
        {numPage <= 1 ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}>PREV</button>
            <p>{numPage - 1}</p>
          </>
        )}
        <h3>{numPage}</h3>
        {numPage >= cantPage ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <p>{numPage + 1}</p>
            <p>{`...${cantPage}`}</p>
            <button onClick={() => dispatch(next())}>NEXT</button>
          </>
        )}
      </div>
    </div>
  );
}
