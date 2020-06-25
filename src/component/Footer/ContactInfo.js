import React from 'react'


function ContactInfo() {
    return (
        <div className="ContactInfo">
            <span className="title">Contact Info</span>

            <div>
                <span className="lable">Tel:</span>
                <span>+852 6600 7150</span>
            </div>

            <div>
                <span className="lable">Email:</span>
                <span>yinyu@connect.hku.hk</span>
            </div>

            <div>
                <span className="lable">
                    <a href="https://www.linkedin.com/in/calvin-wu-397aa9a1/" target="_blank" rel="noopener noreferrer">Linkedln</a>
                </span>
            </div>
        </div>
    )
}

export default ContactInfo
