import React from "react";
import { useSelector } from "react-redux";

export default function CatList({ catPics }) {
    // const isLoading = useSelector(state => state.status)

    return (
        <>
            {/* {isLoading === 'loading' ? <h2>Getting your cats...</h2> : catPics.map(cat => (
                <img src={cat.url} key={cat.id} alt='cat' />
            ))} */}
            {catPics.map(cat => (
                <img src={cat.url} key={cat.id} alt='cat' />
            ))}
        </>
    )
}