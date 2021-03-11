import React from 'react';
import styled from 'styled-components';
import { Section, Title, Scroll, SelectionButton, slideUpAnimation } from '../LayoutComponents';
import { formattedPeriod } from '../../utils/formatting';


const SearchSection = styled(Section)`
    animation-name: ${slideUpAnimation};
    animation-duration: 0.3s
`;

const FilterTitle = styled(Title)`
    font-family: "Work Sans Bold";
    font-size: 1rem;
`;

const Unselect = styled.span`
    font-family: "Work Sans Bold";
    margin-left: 0.5rem;
`;

interface Props {
    selected: string | null;
    optionsArr: string[];
    title: string;
    handleResultSelection: (selection: string | null ) => void;
}

const SelectionSection: React.FC<Props> = ({ selected, optionsArr, title, handleResultSelection }: Props) => {
    
    if (!selected) {
        return(
            <React.Fragment>
                <SearchSection>
                    <FilterTitle>{title}</FilterTitle>
                    <Scroll>
                        {
                            optionsArr.map(item => 
                                <SelectionButton 
                                    selected={false}
                                    bg={"#bfc8c9"}
                                    color={"#2F2F2F"}
                                    border={"#bfc8c9"}
                                    key={item}
                                    onClick={() => handleResultSelection(item)}
                                    >
                                        {formattedPeriod(item)}
                                </SelectionButton> )
                        }
                    </Scroll>
                </SearchSection>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
                <Section>
                    <FilterTitle>{title}</FilterTitle>
                    <Scroll>
                        <SelectionButton 
                            selected={true}
                            bg={"#2F2F2F"}
                            color={"#FFFFFF"}
                            border={"#2F2F2F"}
                            >
                                {formattedPeriod(selected)} 
                                <Unselect onClick={() => handleResultSelection(null)}>
                                    &#x2715;</Unselect>
                        </SelectionButton> 
          
                    </Scroll>
                </Section>
            </React.Fragment>
    );
};

export default SelectionSection;