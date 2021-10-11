import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

const collectionServices = [
    <Button>Card Search</Button>,
    <Button>Collection Manager</Button>,
    <Button>Wish List</Button>
];

const playerServices = [
    <Button>Game Tracker</Button>,
    <Button>Deck Lists</Button>,
    <Button>Tournament Helper</Button>
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {collectionServices}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {playerServices}
                </ButtonGroup>
            </header>
        </div>
    );
}

export default App;
