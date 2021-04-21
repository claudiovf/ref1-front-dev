import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { SectionTitle, Section, Scroll, SelectionButton } from '../../LayoutComponents';

const Container = styled.div`
    width: 100%;
    height: auto;
    //background-color: tomato;
`;

const ResultsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    //background-color:teal;
    width: auto;
    height: auto;
    max-width: 100vw;
    margin: 1.25rem;
`;
const Title = styled(SectionTitle)`
    padding: 0.25rem 0 0.25rem 0;
    vertical-align: bottom;
    text-align: left;
    font-size: 1.25rem;
    //background-color: green;
`;



const PreviousResults: React.FC = () => {
    const [ prevSelected, setPrevSelected ] = useState<string | null>("2021");

    const selRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if(selRef && selRef.current) {
            selRef.current.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
        }

    }, [selRef, prevSelected]);

    return (
        <React.Fragment>
            <Container>
                <ResultsWrap>
                    <Title color={"#2f2f2f"}>Previous Results</Title>
                    <Section>
                        <Scroll>
                            {
                                ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"].reverse().map(race => 
                                    race === prevSelected
                                    ? <SelectionButton
                                        ref={selRef}
                                        key={race}
                                        bg={"#00c49a"}
                                        color={"#FFF"}
                                        border={"rgb(255,255,255, 0)"}
                                        selected={true}
                                        >
                                        {race}
                                    </SelectionButton>
                                    : <SelectionButton
                                        key={race}
                                        color={"#828282"}
                                        bg={"rgb(0,0,0,0)"}
                                        border={"rgb(0,0,0,0)"}
                                        selected={false}
                                        onClick={() => setPrevSelected(race)}
                                        >
                                        {race}
                                    </SelectionButton>
                                )
                            }
                        </Scroll>
                    </Section>
                </ResultsWrap>
            </Container>
        </React.Fragment>
    );
};

export default PreviousResults;