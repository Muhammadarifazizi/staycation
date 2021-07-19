import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from 'react-router-dom'


// test the button in disable state
test("Should not allowed click button if isDisabled is present", ()=>{
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// test button in loading state
test("Should not render Loading/Spinner", ()=>{
    const { container, getByText } = render(<Button isLoading></Button>);
    // check if they have loading text in it using regex
    expect(getByText(/loading/i)).toBeInTheDocument();
    // check in container type is span
    expect(container.querySelector("span")).toBeInTheDocument();
});

// check the link is external link by using tag <a></a>

test("Should not render <a></a> tag", ()=>{
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should not render <Link> component", ()=>{
    const { container } = render(
    <Router>
        <Button href="" type="link" isExternal></Button>
    </Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
});