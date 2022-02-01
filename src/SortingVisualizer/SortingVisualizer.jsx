import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    // Sorting Algorithms
    mergeSort(array) {

    }

    quickSort(array) {

    }

    heapSort(array) {

    }

    bubbleSort(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; i < array.length - i - 1; j++) {
                if (array[j + 1] < array[j]) {
                    [array[j + 1], array[j]] = [array[j], array[j + 1]]
                }
            }
        };
        return array;
    }

    render() {
        const {array} = this.state;

        return (
            <>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}>
                        </div>
                    ))}
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick New Sort</button>
                    <button onClick={() => this.heapSort()}>Heap New Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble New Sort</button>
                </div>
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}