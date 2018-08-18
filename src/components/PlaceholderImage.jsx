import React from 'react';

const BASE_URL = "https://placeimg.com";

export function generateURL(width, height, category, filter) {
    const maybeFilter = filter !== null
        ?  `/${filter}`
        : ''

    return `${BASE_URL}/${width}/${height}/${category}${maybeFilter}`;
}

export default function PlaceholderImage({ width, height, category, filter }) {
    const url = generateURL(width, height, category, filter);

    return (
        <div>
            <img src={url} />
            <div>{url}</div>
        </div>
    )
}
