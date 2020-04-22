import React from 'react'

export function SearchBar() {


    return (
        <div>
            <input type='text' />
            <button onSubmit={(e) => this.props.handleSubmit(e.target.value)}>Add</button>
        </div>
    )
}

