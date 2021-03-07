import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CurrTeamStyles, DriverPeriod } from '../../../types';
import { formattedPeriod } from '../../../utils/formatting';
import { StyledButton, Scroll } from '../../LayoutComponents';

const ScrollWrapper = styled.div<{ bg: string}>`
    background-color: ${props => props.bg };
    height: auto;
    width: 100%;
    padding: 0.5rem 0;
    position: -webkit-sticky;
    position: sticky;
    top: 6rem;
`;

const SelectionButton = styled(StyledButton)<{ bg: string; color: string; selected: boolean; border: string}>`
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border: 2px solid ${props => props.border};
    padding: 0.5rem 1rem;
    font-family: ${props => props.selected ? "Work Sans Bold" : "Work Sans Semi Bold" };
    margin: 0.25rem;
    white-space: nowrap;
    border-radius: 2rem;
    scroll-snap-align: center;
`;


interface Props {
    periods: DriverPeriod[];
    handlePeriodChange: (selected: string) => void;
    style: CurrTeamStyles;
    periodSelected: string;
}

const PeriodButtons: React.FC<Props> = ({periods, handlePeriodChange, style, periodSelected}: Props) => {
    if(!periods) return null;

    const selRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if(selRef && selRef.current) {
            selRef.current.scrollIntoView({ behavior: "smooth", inline: "center" });
        }

    }, [selRef]);
    
    const seasonPeriods = periods.map(p => 
        !isNaN(Number(p.period)) ? p.period : null
    );

     const teamPeriods = periods.map(p => 
        isNaN(Number(p.period)) && p.period !== "Career" ? p.period : null
    );

    const displayPeriods: string[] = [];
    [teamPeriods.reverse(),["Career"], seasonPeriods].map(arr => {
        return arr.map(period => period !== null ? displayPeriods.push(period): null);
    });

    return (
        <React.Fragment>
            <ScrollWrapper bg={style.primary}>
                <Scroll>
                    {displayPeriods.map(period => period !== null
                        ? period === periodSelected
                            ? <SelectionButton 
                                ref={selRef}
                                selected={true}
                                bg={style.secondary}
                                color={"#FFFFFF"}
                                border={style.secondary}
                                key={period}
                                onClick={() => handlePeriodChange(period)}>
                                    {formattedPeriod(period)}
                            </SelectionButton> 
                            : <SelectionButton 
                                selected={false}
                                bg={style.primary}
                                color={style.secondary}
                                border={style.secondary}
                                key={period}
                                onClick={() => handlePeriodChange(period)}>
                                    {formattedPeriod(period)}
                            </SelectionButton> 
                        : null )
                    }
                </Scroll>
            </ScrollWrapper>
        </React.Fragment>
    );

};

export default PeriodButtons;