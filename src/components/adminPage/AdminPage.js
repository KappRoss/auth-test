import React, {useState} from 'react'
import {connect} from "react-redux";

const AdminPage = ({users}) => {

    const [showUsers, setShowUsers] = useState(false)

    return (
        <div>
            <h1>AdminPage</h1>
            <button onClick={() => setShowUsers(!showUsers)}>Users list</button>
            {
                showUsers
                    ? <div>
                        {users.map((item, index) => (
                            <div key={index}>
                                Login: {item.userName}
                                <button>Block</button>
                            </div>
                        ))}
                    </div>
                    : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.auth.users
    }
}

export default connect(mapStateToProps)(AdminPage)