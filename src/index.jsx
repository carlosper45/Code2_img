import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Sing Up Form';
const explanation = 'Please enter below all the required fields.';

const BASE_URL = "https://placeimg.com";

function generateURL(width, height, category, filter) {
    const maybeFilter = filter !== null
        ?  `/${filter}`
        : ''

    return `${BASE_URL}/${width}/${height}/${category}${maybeFilter}`;
}

function Radio(props) {
    return (
        <label>
            <input
                type="radio"
                name={props.group}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    )
}

class SignUpForm extends React.Component {
    state = {
        width: 480,
        height: 640,
        category: "any",
        filter: null
    }

    handleWidthChange = (e) => {
        this.setState({ width: e.target.value });
    }

    handleHeightChange = (e) => {
        this.setState({ height: e.target.value });
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    }

    handleFilterChange = (e) => {
        if (e.target.checked) {
            const filter = e.target.value === "no-filter"
                ? null
                : e.target.value

            this.setState({ filter });
        }
    }

    render() {
        const url = generateURL(
            this.state.width,
            this.state.height,
            this.state.category,
            this.state.filter
        );

        return (
            <div>
                <input
                    type="number"
                    onChange={this.handleWidthChange}
                    value={this.state.width}
                />
                <input
                    type="number"
                    onChange={this.handleHeightChange}
                    value={this.state.height}
                />

                <select
                    name="category"
                    onChange={this.handleCategoryChange}
                    value={this.state.category}
                >
                    <option value="any">Any</option>
                    <option value="animals">Animals</option>
                    <option value="arch">Architecture</option>
                    <option value="nature">Nature</option>
                    <option value="people">People</option>
                    <option value="tech">Tech</option>
                </select>

                <div>
                    <Radio
                        group="filter"
                        value="no-filter"
                        checked={this.state.filter === null}
                        onChange={this.handleFilterChange}
                    >
                        No filter
                    </Radio>

                    <Radio
                        group="filter"
                        value="grayscale"
                        checked={this.state.filter === "grayscale"}
                        onChange={this.handleFilterChange}
                    >
                        Grayscale
                    </Radio>

                    <Radio
                        group="filter"
                        value="sepia"
                        checked={this.state.filter === "sepia"}
                        onChange={this.handleFilterChange}
                    >
                        Sepia
                    </Radio>
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
