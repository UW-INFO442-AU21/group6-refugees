import './group.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Group() {
    return (
        <div className="Group">
            <header className="GroupHeader">
                <h1>SHORT-TERM SERVICE GROUPS</h1>
                <h2>Start a short term service group!</h2>
            </header>
            <Button variant="primary">Create Group +</Button>
        </div>
    );
}

export default Group;