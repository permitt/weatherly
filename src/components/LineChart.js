import React from 'react';
import { Chart } from 'react-charts'



export function LineChart() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7], [5, 7], [6, 9], [7, 5], [8, 5]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )



    return (
        <div
            style={{
                width: '400px',
                height: '300px',
                paddingTop: 50,
                margin: '0 auto'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}
