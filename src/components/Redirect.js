import React from 'react'

export default function Redirect(props) {
    return (
        <div>
            {props.history.push('/page/1')}
        </div>
    )
}
