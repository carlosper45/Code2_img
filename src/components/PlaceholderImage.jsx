import React from 'react';

const BASE_URL = "https://placeimg.com";

export function generateURL(width, height, category, filter) {
    const maybeFilter = filter !== null
        ?  `/${filter}`
        : ''

    return `${BASE_URL}/${width}/${height}/${category}${maybeFilter}`;
}

export default function PlaceholderImage(props) {
    const url = generateURL(
        this.props.width,
        this.props.height,
        this.props.category,
        this.props.filter
    );

    return (
        <div>
            <img src={url} />
            <div>{url}</div>
        </div>
    )
}
