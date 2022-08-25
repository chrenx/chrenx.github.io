import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat about {firstName} </p>
            <p><span style={{color: info.baseColor}}>about {firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            {/* <p style={{color: info.baseColor}}> Proficient With</p> */}
            <ul className={Style.skills}>
                {info.skills.proficientWith.map(proficiency => <li>{proficiency}</li>)}
            </ul>
            {/* <p style={{color: info.baseColor}}> Exposed To</p> */}
            {/* <ul className={Style.skills}>
                {info.skills.exposedTo.map(skill => <li>{skill}</li>)}
            </ul> */}
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map(hobby => (
                    <li><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                education</p>
            <p><span style={{color: info.baseColor}}>education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            
            <ul>
                {info.education.map(edu => (
                    <ul>
                        <Box mb={'3rem'}>
                            <li><Box component={'span'} mr={'1rem'} color={'green'} fontWeight={'bold'}>{edu.degree} {edu.major}, {edu.year}</Box></li>
                            <li><Box component={'span'} ml={'3rem'}>{edu.school}</Box></li>
                        </Box>
                        
                    </ul>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} title="Intro"/>
            <Terminal text={skillsText()} title="Skills"/>
            <Terminal text={educationText()} title="Education"/>
            <Terminal text={miscText()} title="Miscellaneous"/>
        </Box>
    )
}