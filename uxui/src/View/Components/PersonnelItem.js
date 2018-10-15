import React, { Component } from 'react'

class PersonnelItem extends Component
{
    constructor(props) {
        super(props)

        this.pers = props.personnel
    }

    render() {
        return (
            <div className="card mx-4 my-2 col-sm-6 col-md-4 col-lg-3" style={{'width': '18rem'}}>
                <div className="card-body">
                    <p className="card-text">
                        {this.pers.firstName} {this.pers.surname}
                    </p>
                </div>
            </div>
        )
    }
}

export default PersonnelItem