import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Sing Up Form';
const explanation = 'Please enter below all the required fields.';

const BASE_URL = "https://placeimg.com";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 480,
            height: 640,
            category: "any",
            filter: "undefined"
        }
    }

    handleWidthChange (e) {
        this.setState({ width: e.target.value });
    }

    handleHeightChange (e) {
        this.setState({ height: e.target.value });
    }

    handleCategoryChange (e) {
        this.setState({ category: e.target.value });
    }

    handleFilterChange(e) {
        if (e.target.checked) {
            this.setState({ filter: e.target.value });
        }
    }

    generateURL(width, height, category, filter) {
        const maybeFilter = filter !== "undefined"
            ?  `/${filter}`
            : ''

        return `${BASE_URL}/${width}/${height}/${category}${maybeFilter}`;
    }

    render() {
        const url = this.generateURL(
            this.state.width,
            this.state.height,
            this.state.category,
            this.state.filter
        );

        return (
            <div>
                <input
                    type="number"
                    onChange={this.handleWidthChange.bind(this)}
                    value={this.state.width}
                />
                <input
                    type="number"
                    onChange={this.handleHeightChange.bind(this)}
                    value={this.state.height}
                />

                <select
                    name="category"
                    onChange={this.handleCategoryChange.bind(this)}
                    value={this.state.category}
                >
                    <option value="any">Any</option>
                    <option value="animals">Animals</option>
                    <option value="arch">Architecture</option>
                    <option value="nature">Nature</option>
                    <option value="people">People</option>
                    <option value="tech">Tech</option>
                </select>

                <div id="filter">
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value="undefined"
                            checked={this.state.filter === "undefined"}
                            onChange={this.handleFilterChange.bind(this)}
                        />
                        No filter
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value="grayscale"
                            checked={this.state.filter === "grayscale"}
                            onChange={this.handleFilterChange.bind(this)}
                        />
                        Grayscale
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value="sepia"
                            checked={this.state.filter === "sepia"}
                            onChange={this.handleFilterChange.bind(this)}
                        />
                        Sepia
                    </label>
                </div>

                <img src={url} />
                <div>{url}</div>
            </div>
        );
    }
}

ReactDOM.render (
    <SignUpForm />,
    document.getElementById('app')
);
