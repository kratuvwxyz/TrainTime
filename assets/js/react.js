




const App = () => (
    <div>
        <h3 className="card-title">
            Current Train <strong>Tracker</strong>
        </h3>
        <div className="card-body">
                <table className="table table-hover" id="train-table">
                    <thead>
                        <tr>
                            <th>Train Name</th>
                            <th>Destination</th>
                            <th>Frequency (min)</th>
                            <th>Next Arrival</th>
                            <th>Minutes Away</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
    </div>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);