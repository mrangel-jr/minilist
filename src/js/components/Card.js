/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';
import License from './License';

const StyledCard = styled.li`

    position: relative;
    width: 100%;
    -webkit-transition: background 0.3s ease-in-out;
    transition: background 0.3s ease-in-out;
    box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
    list-style-type: none;

    .card-info {
        font-family: 'Poppins';
        transition: all 0.3s ease-in-out;
        padding: 1.5rem;
        flex: 1;
        position: relative;
        clear: both;
        background-color: #fff;
        margin-bottom: 1.5rem;
        cursor: pointer;

        &:hover {
            background-color: rgba(244,247,246,0.3);
        }

        &--content {

            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;

            .description {
                h1 {
                    color: ${props => props.theme.main};
                    font-weight: 400;
                }
                p {
                    color: ${props => props.theme.secondaryText};
                }
            }
        }

        &--footer {
            display: flex;
        }
    }
`;


export default function Card ({card}) {

    return (

        <StyledCard>
            <div className="card-info">
                <div className="card-info--content">
                    <div className="description">
                        <h1>{card.name}</h1>
                        <p>{card.description}</p>
                    </div>
                    <div>
                        <Tag categories={card.categories}/>
                    </div>
                </div>
                <div className="card-info--footer">
                    <License subscriptions={card.subscriptions}/>
                </div>
            </div>
        </StyledCard>
    )
}

Card.defaultProps = {
    card: {}
}
  
Card.propTypes = {
    /** Dados do App */
    card: PropTypes.object.isRequired
}