import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLicense = styled.ul`
    display: inline-flex;
    align-items: baseline;

    li {
        display: inline-flex;
        align-items: baseline;
        padding: 0 1rem 0 0;

        span {
            color: ${props => props.theme.secondaryText}
        }

        h3 {
            font-size: 1.5rem;
            padding: 0 .5rem;
            font-weight: 300;
        }

    }
`;


export default function License ({subscriptions}) {

    return (
        <StyledLicense>
            {subscriptions && subscriptions.map((subscription,idx) => 
            <li key={`subscription-${idx}`}>
                <span>{subscription.name}</span>
                <h3>
                {(subscription.price === 0) ? "Free" :(subscription.price/100).toFixed(2).toString()}
                    <sup>{(subscription.price === 0) ? "" :'€'}</sup>
                </h3>
            </li>)
            }
        </StyledLicense>

    )
}

License.defaultProps = {
    subscriptions: []
}

License.propTypes = {
    /** Lista de licensas */
    subscriptions: PropTypes.array.isRequired,
}