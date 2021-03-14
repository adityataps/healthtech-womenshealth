import React from 'react'
import './SubCard.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


export default function SubCard(props) {
    return (
        <OverlayScrollbarsComponent
            className={"subcard-container"}
            options={{ scrollbars: { visibility: 'auto', autoHide: 'move' } }}
        >
            {props.children}
        </OverlayScrollbarsComponent>
    )
}