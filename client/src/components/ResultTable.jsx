import React from 'react'

const ResultTable = () => {
  return (
    <>
    <h3 className='p-result'>Previous Results :-</h3>
        <table>
            <thead className='table-head'>
                <tr className="table-row">

                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>

            </thead>

            <tbody>
                <tr className='table-body'>
                    <td>Daily Tuition</td>
                    <td>03</td>
                    <td>20</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ResultTable