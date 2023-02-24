import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

const ResultTable = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res);
        })
    })
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

                    {!data ?? <div>No Data Found</div>}
                    {/* const ddata; */}
                    {
                    // ddata = data.split(',')

                        data.map((v, i) => (
                            <tr className='table-body' key={i}>
                                <td>{v?.username || ''}</td>
                                <td>{v?.attempts || 0}</td>
                                <td>{v?.points || 0}</td>
                                <td>{v?.achived || ''}</td>
                            </tr>
                        ))
                    }
                    

                </tbody>
            </table>
        </>
    )
}

export default ResultTable;