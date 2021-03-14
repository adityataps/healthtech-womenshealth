import React from 'react'
import './testpage.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


function TestPage() {
    return (
        <div>
            <OverlayScrollbarsComponent
                options={{ scrollbars: { visibility: 'auto', autoHide: 'move' } }}
                className={"page-wrapper"}
                >

                <b style={{"fontSize": "300px"}}> Hello this is Senor Test page </b>
                <b style={{"fontSize": "300px"}}> Hello this is Senor Test page </b>

            </OverlayScrollbarsComponent>
        </div>
    );
}

export default TestPage;