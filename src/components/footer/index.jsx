import {ReactComponent as Hosts} from '../../media/images/Logos.svg'
import {ReactComponent as Mail} from '../../media/images/email.svg'
import '../../css/footer.css'

export default function Footer(props){
    return (
        <div className="footer">
            <div className="logos">
                <Hosts />
            </div>
            <div className="location">
                Friday, November 3rd, <br></br> 
                10:00 AM - 3:00 PM, <br></br>
                Price Center East Ballroom <br></br>
            </div>
            <div className="contact">
            <a href="mailto:eng-rcf@eng.ucsd.edu">
                <Mail className="mail"/> eng-rcf@eng.ucsd.edu
            </a>
            </div>
        </div>
    ) 
}
