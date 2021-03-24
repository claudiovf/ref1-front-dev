import React from 'react';
import styled from 'styled-components';
import { Stat } from '../../types';
import { SelectionButton, slideUpAnimation } from '../LayoutComponents';
import { formattedPeriod, formattedStat } from '../../utils/formatting';
import { useDispatch } from 'react-redux';
import { setSearch, toggleOpen } from '../../store/actions';


const isDark = (stat: string): boolean => {
    if ( stat === "wins" || stat === "pointsFinish") return false;
    else return true;
};

const CardOverlay = styled.div<{ rad: string; darkOverlay: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${ props => props.darkOverlay ? "rgba(47, 47, 47, 0.85)" : "rgba(255, 255, 255, 0.9)" };
    border-radius: ${props => props.rad};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
`;
const MagButton = styled(SelectionButton)`
    position: absolute;
    top: 0;
    right: 0;
    min-height: 3rem;
    min-width: 3rem;
    margin: 1rem;
    padding: 0 1rem;
    font-size: 0.75rem;
`;

const Mag = styled.div`
  -webkit-transform: rotate(45deg); 
  -moz-transform: rotate(45deg); 
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  height: auto;
  font-size: 1.5rem;
`;


const NextSearchContainer = styled.div`
    position: absolute;
    top: 5rem;
    right: 0;
    margin: 1rem;
    padding: 0.5 rem 1rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
`;

const SelectionButtonRight = styled(SelectionButton)`
    text-align: right;
    margin-bottom: 2rem;
    width: auto;
    max-width: 70vw;
    min-height: 3rem;
    white-space: normal;
    animation-name: ${slideUpAnimation};
    animation-duration: 0.4s;
`;

const PeriodSpan = styled.span`
    white-space: nowrap;
`;

interface Props {
    s: Stat; 
    rad: string; 
    period: string;
    type: string;
    overlay: boolean;
    handleOverlay: (bool: boolean) => void;
}

const NextSearchOverlay: React.FC<Props> = ({s, rad, period, type, overlay, handleOverlay}: Props) => {
    const dispatch = useDispatch();
      
    return (
        <>
            {!overlay
                ?<MagButton 
                    selected={true}
                    bg={"#ff425c"}
                    border={"#ff425c"}
                    color={"#FFFFFF"}
                    onClick={() => handleOverlay(true)}>
                        <Mag>&#9906;</Mag>
                    </MagButton>
                :null
            }
            {overlay
                ? <CardOverlay rad={rad} darkOverlay={isDark(s.stat)}>
                    <MagButton 
                        selected={true}
                        bg={"#ff425c"}
                        border={"#ff425c"}
                        color={"#FFFFFF"}
                        onClick={() => handleOverlay(false)}>
                            Close &#x2715;
                    </MagButton>
                    <NextSearchContainer>
                        <SelectionButtonRight 
                            selected={true}
                            bg={"#ff425c"}
                            border={"#ff425c"}
                            color={"#FFFFFF"}
                            onClick={() => {
                                
                                dispatch( setSearch({
                                    resultsFor: type,
                                    sortBy: s.stat,
                                    filterBy: period === "Career" ? "All Time" : isNaN(Number(period)) ? "Team" : "Season",
                                    period: period === "Career" ? "All Time" : period
                                }) );
                                handleOverlay(false);
                                dispatch( toggleOpen() );
                            }}>
                                {` ${formattedStat(s.stat)} 
                                by ${formattedPeriod(type)} 
                                - `}<PeriodSpan> 
                                        {type === "teams" && formattedPeriod(period) === "Career" ? "All Time" : formattedPeriod(period)}
                                    </PeriodSpan>
                        </SelectionButtonRight>
                        { s.stat !== "dnfs" && s.total !== 0
                            ? <SelectionButtonRight 
                            selected={true}
                            bg={"#ff425c"}
                            border={"#ff425c"}
                            color={"#FFFFFF"}
                            onClick={() => {
                                dispatch( setSearch({
                                    resultsFor: type,
                                    sortBy: `${s.stat}_pct`,
                                    filterBy: period === "Career" ? "All Time" : isNaN(Number(period)) ? "Team" : "Season",
                                    period: period === "Career" ? "All Time" : period
                                }) );
                                handleOverlay(false);
                                dispatch( toggleOpen() );
                            }}>
                                % {` 
                                    ${formattedStat(s.stat).split(" ")[1]} 
                                    ${formattedStat(s.stat).split(" ")[2] ? formattedStat(s.stat).split(" ")[2]: ""} 
                                    by ${formattedPeriod(type)}
                                    - `}<PeriodSpan> 
                                        {type === "teams" && formattedPeriod(period) === "Career" ? "All Time" : formattedPeriod(period)}
                                    </PeriodSpan>
                        </SelectionButtonRight>
                        : null}
                    </NextSearchContainer>
                </CardOverlay>
                : null
            }
        </>
    );
};

export default NextSearchOverlay;