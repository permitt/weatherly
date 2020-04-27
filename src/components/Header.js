import React from 'react'
import Divider from '@material-ui/core/Divider';

export default function Header() {
    return (
        <div className='header' style={{ marginBottom: 20, backgroundColor: '' }} >
            <div classnmae='header-logo'>
                <h2>Weatherly</h2>
            </div>
            <Divider />

        </div>
    )
}
