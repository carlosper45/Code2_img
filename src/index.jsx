import React from 'react';
import ReactDOM from 'react-dom';

import Radio from './components/Radio';
import PlaceholderImage from './components/PlaceholderImage';

const title = 'Sing Up Form';
const explanation = 'Please enter below all the required fields.';

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

                <PlaceholderImage
                    width={this.state.width}
                    height={this.state.height}
                    category={this.state.category}
                    filter={this.state.filter}
                />
            </div>
        );
    }
}

ReactDOM.render (
    <SignUpForm />,
    document.getElementById('app')
);
