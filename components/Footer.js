import React from 'react'

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold"> À Propos</h5>
                <div> How It Works</div>
                <div> Newsroom</div>
                <div> Investors</div>
                <div> Plus Plan</div>
                <div> Luxury Plan</div>
            </div>
            <div  className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold"> Communauté</h5>
                <div> Accesibility</div>
                <div> Vrai Siteweb</div>
                <div> Referrals</div>
                <div> Social Media</div>
                <div> Property</div>
            </div>
            <div  className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold"> Hôte</h5>
                <div> How It Works</div>
                <div> Portfolio</div>
                <div> Places</div>
                <div> Homes</div>
                <div> Refer A Friend</div>
            </div>
            <div  className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold"> Support</h5>
                <div> Help Centre</div>
                <div> Contact</div>
                <div> Email</div>
                <div> Chat</div>
                <div> Phone</div>
            </div>

        </div>
    )
}

export default Footer
