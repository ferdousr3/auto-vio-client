import React from "react";
import PageTitle from "../../components/share/PageTitle/PageTitle";
import TermsDetails from "../../components/TermsDetails/TermsDetails";

const Terms = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Terms" />
      {/* main parts of the page */}
      <div className="container mx-auto">
        <div className="  pt-20 pb-10  ">
          <div className=" pb-10">
            <h1 className=" text-3xl sm:text-5xl uppercase text-black font-light ">
              Terms of Use
            </h1>
            <p className="text-eight pt-2 text-lg ">2022.04.27</p>
          </div>
        </div>
        <section>
          <TermsDetails
            title="USE OF THIS SITE"
            firstSub="Please read the following terms carefully as use of the www.auto-vio.web.app site means that you agree to them."
            secondSub="The rights in the designs, featured articles, pictures, information, images, surveys, advertising, logos, trademarks, audio, video, text, data, music, sound, graphics, photographs, videos, software, and other content and materials of this site are owned by or licensed to Hyundai Motor Company. They are protected by copyright, trademark right and other intellectual property rights. You may not copy, reproduce, modify, distribute, redistribute, publish, republish, display, post, upload, use to prepare derivative works or transmit any part of this site without the written permission of Hyundai Motor Company in any way in any medium whatsoever now known or later invented. You may view or print individual pages only for your own personal, noncommercial use. And also, you may download copy of parts of this site on any single computer for your personal, noncommercial home use only, provided you retain all trademark, copyright and other proprietary notices displayed on, embedded in."
          />
        </section>
        <section>
          <TermsDetails
            title="LIABILITY"
            firstSub="We try to ensure the accuracy of all of the content. However, we do not accept any liability for the use made by you of the content. The content of this site should only be used for information purposes and you should not rely on it to make (or refrain from making) any decision or take (or refrain from taking) any action. In particular, vehicle specifications shown on this website are based upon the latest available information held by the Overseas Marketing Group of Hyundai Motor Company and this may change from time to time. The colors and finishes reproduced may also vary from the actual color and paint finishes on the vehicles themselves. We strongly recommend you visit your nearest Hyundai Motor Company dealer to inspect the vehicles personally."
            secondSub="The site is for your personal use and is not to be used for any commercial purpose. As a result, Hyundai Motor Company will not be responsible in any circumstances for your loss of profits. Hyundai Motor Company will also not be responsible for any loss including wasted expenditure, corruption or destruction of data."
            thirdSub='Hyundai Motor Company is not liable for any damages or losses resulting from your inability to use this site. Hyundai Motor Company cannot promise that the site will be uninterrupted or entirely error free. Because of the nature of the Internet, the site is provided on an "as available" basis. Hyundai Motor Company will not be responsible to you if we are unable to provide the site for any reason beyond our control.'
          />
        </section>
        <section>
          <TermsDetails
            title="CONTENT AND ADVERTISEMENTS"
            firstSub="This site also provides links to and content from other Internet sites and resources. Because Hyundai Motor Company has no control over these sites and resources, you acknowledge and agree that Hyundai Motor Company is not responsible for the availability of these external sites or resources and does not endorse and is not responsible for any content, advertising products, services or other materials on or available from these sites or resources."
          />
        </section>
        <section>
          <TermsDetails
            title="USE OF SOCIAL PLUG-INS ON www.auto-vio.web.app"
            firstSub="Visitors of www.auto-vio.web.app could share experience and opinions by using social plug-ins of social network, such as Facebook, Twitter, Google+ and Pinterest. When you visit www.auto-vio.web.app for the first time, all social plug-ins are not activated by default setting. When you click the button of social network on www.auto-vio.web.app, however, the social plug-ins require logon to the social network services and access permissions. If you allow this request, the connection between the browser and the social plug-ins become effective until you deactivate it by changing options or deleting browser cookies."
            secondSub="The social networks-related actions gathered from the social plug-ins and the Facebook pages operated by Hyundai Motor Company can be stored in www.auto-vio.web.app to listen to the visitors' voices.www.auto-vio.web.app, however, does not store any private information on social networks."
            thirdSub="Private information is directly transmitted from the social network services to your browser, and Hyundai Motor Company does not own or operate social network service platforms. If you do not agree that the social network services retrieve data about you via social plug-ins, you must log out of the social network services before visiting www.auto-vio.web.app and do not log on to the social network services on www.auto-vio.web.app."
          />
        </section>
        <section>
          <TermsDetails
            title="CHANGES TO THE TERMS"
            firstSub="Hyundai Motor Company may change the site or these terms at any time. If you use the site after Hyundai Motor Company has changed the terms you will be bound by the new terms."
          />
        </section>
        <section>
          <TermsDetails
            title="COOKIE POLICY"
            firstSub="We use Adobe Analytics to collect information about visitor behavior on our website. Adobe Analytics stores information about what pages you visit, how long you are on the site, how you got here and what you click on. This Analytics data is collected via a JavaScript tag in the pages of our site and is not tied to personally identifiable information. We therefore do not collect or store your personal information (e.g. your name or address) so this information cannot be used to identify who you are."
          />
        </section>
        <section>
          <TermsDetails
            title="OPENSOURCE DISTRIBUTION"
            firstSub="This website provides necessary notice and source code information regarding the OpenSource software included in our prod"
          />
        </section>
      </div>
    </>
  );
};

export default Terms;
