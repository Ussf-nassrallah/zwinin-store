import React from 'react'
import './ServiceItem.scss'

function ServiceItem({ id, icon, title }) {
    return (
        <div className="service">
            <img src={icon} className="service-icon" alt={title}/>
            <h3 className="service-title">{title}</h3>
        </div>
    )
}

export default ServiceItem
