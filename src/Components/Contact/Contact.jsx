import { ContactStyled } from "./Contact.Styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import { ContactList } from "../ContactList/ContactList";
import { ContactItem } from "../ContactItem/ContactItem";

export const Contact = () => {
    return(
        <ContactStyled>
            <div>
            <ContactList textValue="QUICK LINKS">
                <ContactItem textValue="Hjem"/>
                <ContactItem textValue="Om os"/>
                <ContactItem textValue="Prisliste"/>
                <ContactItem textValue="Booking"/>
                <ContactItem textValue="Newsletter"/>
                <ContactItem textValue="Kontakt"/>
            </ContactList>

            <ContactList textValue="FIND US">
                <ContactItem textValue="WhatsApp" textValue2="+ 45 23 43 43 43"/>
                <ContactItem textValue="Telefonnummer" textValue2="+45 58 84 84 84"/>
                <ContactItem textValue="Adresse"/>
                <ContactItem textValue="Supergatan 56"/>
                <ContactItem textValue="Oslo, Norway"/>
            </ContactList>
            </div>
            <ContactList flex="flex" textValue="FOLLOW US">
                <ContactItem textValue={<FontAwesomeIcon icon={faFacebook} />} />
                <ContactItem textValue={<FontAwesomeIcon icon={faInstagram} />} />
                <ContactItem textValue={<FontAwesomeIcon icon={faTwitter} />} />
                <ContactItem textValue={<FontAwesomeIcon icon={faLinkedin} />} />
            </ContactList>
        </ContactStyled>
    )
}