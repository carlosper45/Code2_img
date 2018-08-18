import React from 'react';
import ReactDOM from 'react-dom';

import Radio from './components/Radio';
import PlaceholderImage from './components/PlaceholderImage';

class App extends React.Component {
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
        const { width, height, category, filter } = this.state

        return (
            <div>
                <input
                    type="number"
                    onChange={this.handleWidthChange}
                    value={width}
                />
                <input
                    type="number"
                    onChange={this.handleHeightChange}
                    value={height}
                />

                <select
                    name="category"
                    onChange={this.handleCategoryChange}
                    value={category}
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
                        checked={filter === null}
                        onChange={this.handleFilterChange}
                    >
                        No filter
                    </Radio>

                    <Radio
                        group="filter"
                        value="grayscale"
                        checked={filter === "grayscale"}
                        onChange={this.handleFilterChange}
                    >
                        Grayscale
                    </Radio>

                    <Radio
                        group="filter"
                        value="sepia"
                        checked={filter === "sepia"}
                        onChange={this.handleFilterChange}
                    >
                        Sepia
                    </Radio>
                </div>

                <PlaceholderImage
                    width={width}
                    height={height}
                    category={category}
                    filter={filter}
                />
            </div>
        );
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('app')
);
