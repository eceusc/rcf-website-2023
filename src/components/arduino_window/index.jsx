// import {ReactComponent as ArduinoButtons} from '../../media/images/arduino interface buttons.svg'
import { useState,useEffect,useRef } from 'react'
import {ReactComponent as Search} from '../../media/images/arduino-interface/Search.svg'
import {ReactComponent as Check} from '../../media/images/arduino-interface/check.svg'
import {ReactComponent as File} from '../../media/images/arduino-interface/file.svg'
import {ReactComponent as Run} from '../../media/images/arduino-interface/run.svg'
import {ReactComponent as Upload} from '../../media/images/arduino-interface/upload.svg'
import {ReactComponent as Download} from '../../media/images/arduino-interface/download.svg'
import '../../css/arduinowindow.css'
import Collapse from 'react-bootstrap/Collapse'
export default function ArduinoWindow(props){
    const commentContent=[{
        header:"How will the event be conducted?",
        body:"The Reverse Career Fair will be in-person and will be held in Price Center East Ballroom on Friday, November 3rd, 2023 from 10:00 AM to 3:00 PM.",
    },
    {
        header:"Who can apply?",
        body:"All UCSD undergraduates are welcome to apply!",
    },
    {
        header:"Do I have to pay to attend?",
        body:"The Reverse Career Fair is completely free for students to attend! However, we require that all projects must be registered through our Google Form application found on this site. This helps ensure a spot for your project and the overall quality of projects at the event.",
    },
    {
        header:"Have more questions for us?",
        body:"Feel free to contact us at ece-rcf@eng.ucsd.edu if you have any additional questions or concerns, we'll get back to you as soon as possible!",
    },
    ]
    const [isDisplayed,setIsDisplayed]=useState(commentContent.map(_=>false))
    function toggleCollapse(i){
        let temp=[...isDisplayed]
        console.log('gange',i)
        temp[i]=!temp[i]
        setIsDisplayed(temp)
    }
    return <>
        <div className='arduino-window' id={props?.id}>
            <div className='header'>
                <div className='button-background'>
                    <div className='left-buttons'>
                        <Check/>
                        <Run/>
                        <File/>
                        <Upload/>
                        <Download/>
                    </div>    
                    <div className='right-buttons'>
                        <Search/>
                    </div>    
                </div>
                <div className='title'>faq</div>
            </div>
            <div className='terminal'>
                <div className='window-title'>faq.cpp</div>
                <div className='window'>
                    {
                        commentContent.map((obj,i)=>
                            <div className={'comment'+((isDisplayed[i])?'':' collapsed')}>
                                <button onClick={_=>toggleCollapse(i)}>
                                    <span className='chevron'>{'>'}</span>
                                    <span className='title'>{obj.header}</span>
                                </button>
                                <Collapse in={isDisplayed[i]}>
                                    <div className='body'>{obj.body}</div>
                                </Collapse>
                            </div>    
                        )
                    }
                </div>
            </div>
        </div>
    </>
}
