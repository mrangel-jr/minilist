import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.span`
    color: ${props => props.theme.main};
`;

export default function Tag ({categories}) {

    return (
        <StyledTag>
            {categories && categories.map(
                (category) => category).join(" / ")
            }
        </StyledTag>
    )

}

Tag.defaultProps = {
    categories: []
}
  
Tag.propTypes = {
    /** Lista de categorias  */
    categories: PropTypes.array.isRequired
}