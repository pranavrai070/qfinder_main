const Footer=()=>{
    return (
        <div className="bg-gray-800 text-white p-8">
        <div className="flex flex-wrap justify-center mb-8">
          <a href="#" className="mr-4 hover:text-gray-500">Partnerships</a>
          <a href="#" className="mr-4 hover:text-gray-500">Temporary Phone Number Generator</a>
          <a href="#" className="mr-4 hover:text-gray-500">Blog</a>
          <a href="#" className="mr-4 hover:text-gray-500">About</a>
          <a href="#" className="mr-4 hover:text-gray-500">Contact</a>
          <a href="#" className="mr-4 hover:text-gray-500">Terms</a>
          <a href="#" className="mr-4 hover:text-gray-500">Privacy Policy</a>
          <a href="#" className="hover:text-gray-500">Sitemap</a>
        </div>
        <div className="text-center mb-4">
          <a href="#" className="bg-black px-4 py-2 inline-block rounded-full">
            <img src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png" alt="Playstore Icon" className="w-30 h-20 mr-2 inline" />
          </a>
        </div>
        <div className="text-center">
          <p>&copy; 2023 Afro.io. All rights reserved.</p>
        </div>
      </div>
    )
   };
   
   export default Footer;