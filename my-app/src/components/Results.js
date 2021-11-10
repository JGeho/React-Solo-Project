import 'bootstrap/dist/css/bootstrap.css';

function Results(props) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.beerData.map((data, index)=>(
                            <tr key={index}>
                                <td>{data?.name}</td>
                                <td>{data?.street}</td>
                                <td>{data?.city}</td>
                                <td>{data?.state}</td>
                                <td>{data?.postal_code}</td>
                                <td>{data?.phone}</td>
                                <td>{data?.website_url}</td>
                            </tr>
                        ))                     
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Results;