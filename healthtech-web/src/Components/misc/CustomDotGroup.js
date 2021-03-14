import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import React from "react";
// import { Button, Icon, Container } from "semantic-ui-react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Egg } from 'react-bootstrap-icons'
import './CustomDotGroup.css'


import { Link } from 'react-router-dom'

const CustomDotGroup = ({ slides, size }) => (
    <div style={{"align-text": "center"}}>
        <ButtonGroup>
            {[...Array(slides).keys()].map(slide => (
                <Link to={`/${slide}`}>

                    <Button className={"nav-button"} disabled={null} as={Dot} key={slide} slide={slide} >
                        <Egg />
                    </Button>

                </Link>
            ))}
        </ButtonGroup>
    </div>
);

CustomDotGroup.defaultProps = {
    size: "mini"
};

CustomDotGroup.propTypes = {
    slides: PropTypes.number.isRequired,
    size: PropTypes.string
};

export default CustomDotGroup;
