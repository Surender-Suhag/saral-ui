import React,{useState} from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';


const Accordian = (props) => {
    const {defaultIsOpen=false} = props;
    const [isOpen,setIsOpen] = useState(defaultIsOpen);

    const renderContent = items => <div className='content'>{items}</div>

    const toggleAccordian = () => {
        setIsOpen(!isOpen);
    }

  

    return (
        <StyledAccordianSection className={props.className} >
            <Header isOpen={isOpen} title={props.title} onClick={toggleAccordian} />
            
            {isOpen? renderContent(props.children):null}
        </StyledAccordianSection>
    )
}

Accordian.propTypes = {
    title:PropTypes.string.isRequired,
    defaultIsOpen:PropTypes.bool
}

const StyledAccordianSection = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    padding-left:20px;
  }
`;


export default Accordian
