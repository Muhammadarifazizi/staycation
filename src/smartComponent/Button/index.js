import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
    const className = [props.className]; 
    // setup button type base on condition
    if (props.isPrimary) className.push("btn-primary");
    if (props.isLarge) className.push("btn-lg");
    if (props.isSmall) className.push("btn-sm");
    if (props.isBlock) className.push("btn-block");
    if (props.hasShadow) className.push("btn-shadow");

    // trigger onClick action if its stuck
    const onClick = () => {
        if(props.onClick) props.onClick();
    };

    // trigger property is disable
    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push("disabled");
        return(
            // className.join(" ") mean we can use multiple className style
            <span 
            className={className.join(" ")}
            style={props.style}
            >
                {
                props.isLoading ? (
                <React.Fragment>
                    {/* state loading if the button is in loading state */}
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading...</span>
                </React.Fragment>
                ) : (
                  props.children
                )}
            </span>
        );
    }

    // rendering component if its type a link not a button
    if(props.type === "link"){
        if(props.isExternal){
            // render react router dom
           return(
            <a 
            href="{props.href}" 
            className={className.join(" ")} 
            style={props.style} 
            target={props.target === "_blank" ? "_blank" :undefined}
            rel={props.target === "_blank" ? " noopener noreferrer " : undefined} 
            >
                {props.children}
            </a>
           );
        }else{
            return(
                <Link 
                to={props.href}
                className={className.join(" ")}
                style={props.style}
                onClick={onClick}
                >
                    {props.children}
                </Link>
            );
        }
    }

    return (
        <button 
        className={className.join(" ")}
        style={props.style}
        onClick={onclick}
        >
            {props.children}
        </button>
    );
}

// declaration all type of property that will be use in buttom components
Button.propTypes={
    type: propTypes.oneOf(["button", "link"]),
    onclick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isPrimary: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool
}
