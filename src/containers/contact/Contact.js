import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    const [contactInformation, setContactInformation] = useState({
        contactName: "",
        contactEmail: "",
        contactMessage: ""
    });

    const updateContact = e => {
        const { name, value } = e.target;
        setContactInformation(prevState => {
            console.log(value)
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    let contactDetail, contactDetailEmail;
    if (contactInfo.number) {
        contactDetail = <><a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a><br /><br /></>
    }
    if (contactInfo.email_address) {
        contactDetailEmail = <><a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a><br /><br /></>
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
                        <form className="contact-form">
                            <input className="contact-input contact-subtitle" type="text" name="contactName" placeholder="Name" value={contactInformation.contactName} onChange={updateContact}></input>
                            <input className="contact-input contact-subtitle" type="text" name="contactEmail" placeholder="Email" value={contactInformation.contactEmail} onChange={updateContact}></input>
                            <textarea className="contact-textarea contact-subtitle" name="contactMessage" placeholder="Message" onChange={updateContact}>
                                {contactInformation.contactMessage}
                            </textarea>
                            <a className="main-button">Submit</a>
                        </form>

                        <div className="contact-text-div">
                            {contactDetail}
                            {contactDetailEmail}
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="contact-image-div">
                        <img alt="Saad Working" src={require("../../assets/images/contactMail.webp")}></img>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
