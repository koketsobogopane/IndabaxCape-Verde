import React from 'react';
import HeroSection from '../molecules/HeroSection'; // Reusing the hero section
import { Link } from 'react-router-dom';

// Placeholder image for Privacy Policy hero (or use a generic one)
import PrivacyHeroImage from '../../assets/Images/knowledge-sharing.jpg'; // Create or choose a suitable image
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';

const PrivacyPolicyPageTemplate = () => {
  // Current date for the "Effective Date"
  const effectiveDate = 'May 22, 2025'; // Update this manually when the policy changes

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section for Privacy Policy */}
      <Navbar />
      <HeroSection
        image={PrivacyHeroImage}
        title="Our Commitment to Your Privacy"
        descriptiveText="This policy details how Deep Learning IndabaX Cabo Verde collects, uses, and safeguards your personal information, ensuring transparency and trust."
      />

      {/* Main Privacy Policy Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ADDED text-left HERE to explicitly left-align paragraphs and lists */}
          <div className="prose prose-lg max-w-none text-gray-800 text-left">
            {/* Effective Date - Keep right-aligned as a common convention */}
            <p className="text-right text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> {effectiveDate}
            </p>

            {/* Each section heading will be left-aligned by default due to prose,
                            but we can add more specific mb- classes to prose elements. */}

            {/* Section 1: Introduction */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              1. Introduction
            </h2>
            <p>
              Welcome to the official website of Deep Learning IndabaX Cabo
              Verde (the "Site"). We are deeply committed to protecting your
              privacy and handling your personal data with the utmost care and
              transparency. This Privacy Policy explains our practices regarding
              the collection, use, disclosure, and safeguarding of your
              information when you visit our Site at **indabaxcv.org** and
              engage with our services, including event registration.
            </p>
            <p className="mb-8">
              By accessing and using our Site and services, you signify your
              agreement to the terms outlined in this Privacy Policy. Should you
              disagree with any part of these terms, we kindly ask that you do
              not use our Site.
            </p>

            {/* Section 2: Information We Collect */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              2. Information We Collect
            </h2>
            <p>
              We collect various types of information to provide and improve our
              services to you. This includes:
            </p>
            <h3 className="text-left mt-8 mb-4">2.1. Personal Data</h3>
            <p>
              This category includes information that can directly identify you:
            </p>
            <ul className="mb-8">
              <li>
                <strong>Identification Information:</strong> Your full name,
                date of birth, and gender.
              </li>
              <li>
                <strong>Contact Details:</strong> Your email address, phone
                number, and physical mailing address.
              </li>
              <li>
                <strong>Professional & Academic Background:</strong> Your
                affiliated institution or university, academic level,
                professional role, and areas of research interest. You may also
                choose to provide your LinkedIn profile link.
              </li>
              <li>
                <strong>Payment Information:</strong> While we do not store
                sensitive payment card details directly on our servers, we
                process transaction details through secure, reputable
                third-party payment processors who handle your financial data.
              </li>
              <li>
                <strong>Voluntary Information:</strong> Any information you
                voluntarily provide to us for logistical purposes, such as
                dietary restrictions or accessibility requirements for event
                participation.
              </li>
            </ul>
            <h3 className="text-left mt-8 mb-4">2.2. Usage Data</h3>
            <p>
              This information is collected automatically as you interact with
              our Site:
            </p>
            <ul className="mb-8">
              <li>
                <strong>Website Activity:</strong> Your IP address, browser
                type, operating system, the specific pages you visit, the time
                spent on those pages, and referring website addresses.
              </li>
              <li>
                <strong>Device Information:</strong> Details about the device
                you use to access our services, including unique device
                identifiers.
              </li>
              <li>
                <strong>Log Data:</strong> Information automatically recorded by
                our servers when you access or use our services.
              </li>
            </ul>
            <p className="mb-8">
              We gather this information when you register for our events,
              subscribe to our newsletters, contact us directly, or otherwise
              interact with our Site.
            </p>

            {/* Section 3: How We Use Your Information */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              3. How We Use Your Information
            </h2>
            <p>
              The information we collect serves several purposes, primarily to
              ensure the smooth operation of IndabaX Cabo Verde and enhance your
              experience:
            </p>
            <ul className="mb-8">
              <li>
                <strong>Event Management:</strong> To process your registration,
                manage your participation, and communicate essential
                event-related updates.
              </li>
              <li>
                <strong>Communication:</strong> To send you newsletters,
                announcements, and other communications relevant to your
                interests or services you've opted into.
              </li>
              <li>
                <strong>Service Improvement:</strong> To analyze website usage
                patterns, understand audience demographics, and continually
                improve our Site's functionality and content.
              </li>
              <li>
                <strong>Security & Compliance:</strong> To ensure the security
                and integrity of our services, prevent fraudulent activities,
                and comply with legal obligations.
              </li>
              <li>
                <strong>Networking (with consent):</strong> To facilitate
                networking opportunities among attendees, for example, by
                including your name and institution on a delegate list, only
                with your explicit consent.
              </li>
            </ul>

            {/* Section 4: How We Share Your Information */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              4. How We Share Your Information
            </h2>
            <p>
              We may share your information with certain trusted third parties
              under specific circumstances:
            </p>
            <ul className="mb-8">
              <li>
                <strong>Service Providers:</strong> We engage third-party
                service providers (e.g., payment gateways, email marketing
                platforms, analytics providers, event management software) to
                assist us in operating our Site and delivering our services.
                These providers are contractually bound to protect your data and
                use it only for the purposes we specify.
              </li>
              <li>
                <strong>Sponsors and Partners:</strong> With your **explicit
                consent**, we may share basic contact or professional
                information (e.g., name, institution) with our event sponsors or
                partners. This is done to connect you with relevant
                opportunities or resources that align with the goals of IndabaX.
                You will always have the option to opt out of such sharing.
              </li>
              <li>
                <strong>Legal & Regulatory Compliance:</strong> We may disclose
                your information if required by law, court order, or in response
                to legitimate requests by public authorities.
              </li>
              <li>
                <strong>Deep Learning Indaba Organization:</strong> Data may be
                shared with the broader Deep Learning Indaba organization for
                statistical analysis, community development, and coordination
                purposes, always adhering to stringent privacy standards.
              </li>
            </ul>
            <p className="mb-8">
              **We do not sell, rent, or trade your personal data to third
              parties for their independent marketing purposes without your
              specific, informed consent.**
            </p>

            {/* Section 5: Data Retention */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              5. Data Retention
            </h2>
            <p className="mb-8">
              We retain your personal data only for as long as is necessary to
              fulfill the purposes for which it was collected, including meeting
              any legal, accounting, or reporting requirements. Typically, event
              registration data may be kept for a period of **[e.g., 3-5
              years]** after the event for follow-up communications, archival,
              and reporting, unless you specifically request earlier deletion or
              extended retention is mandated by law.
            </p>

            {/* Section 6: Your Data Protection Rights */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              6. Your Data Protection Rights
            </h2>
            <p>
              Depending on your geographic location and applicable data
              protection laws (such as GDPR), you may have the following
              significant rights regarding your personal data:
            </p>
            <ul className="mb-8">
              <li>
                <strong>Right to Access:</strong> To request copies of your
                personal data we hold.
              </li>
              <li>
                <strong>Right to Rectification:</strong> To request that we
                correct any information you believe is inaccurate or complete
                any information you believe is incomplete.
              </li>
              <li>
                <strong>Right to Erasure (Right to be Forgotten):</strong> To
                request that we erase your personal data under certain
                conditions.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> To request that
                we limit the processing of your personal data, under certain
                conditions.
              </li>
              <li>
                <strong>Right to Object to Processing:</strong> To object to our
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> To request that we
                transfer the data we have collected to another organization, or
                directly to you, under certain conditions.
              </li>
            </ul>
            <p className="mb-8">
              To exercise any of these rights, please contact us using the
              details provided at the end of this policy. We will respond to
              your request in accordance with applicable laws.
            </p>

            {/* Section 7: Cookies and Tracking Technologies */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mb-8">
              Our Site utilizes "cookies" and similar tracking technologies to
              enhance your Browse experience, analyze website traffic, and for
              limited advertising purposes. Cookies are small data files placed
              on your device. You have the option to configure your browser to
              refuse all or some cookies, or to alert you when cookies are being
              sent. However, please be aware that disabling or refusing cookies
              may affect the functionality or accessibility of certain parts of
              our Site.
            </p>

            {/* Section 8: Security of Your Data */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              8. Security of Your Data
            </h2>
            <p className="mb-8">
              We implement robust technical and organizational security measures
              designed to protect your personal data from accidental loss,
              unauthorized access, use, alteration, and disclosure. These
              measures include data encryption, secure servers, and access
              controls. While we strive to use commercially acceptable means to
              protect your Personal Data, no method of transmission over the
              Internet or method of electronic storage is 100% secure.
              Therefore, we cannot guarantee its absolute security.
            </p>

            {/* Section 9: Links to Other Websites */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              9. Links to Other Websites
            </h2>
            <p className="mb-8">
              Our Site may contain links to third-party websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>

            {/* Section 10: Children's Privacy */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              10. Children's Privacy
            </h2>
            <p className="mb-8">
              Our services are primarily intended for individuals aged 16 and
              above who are pursuing or are interested in advanced education and
              research in AI. We do not knowingly collect personally
              identifiable information from anyone under the age of 16. If you
              are a parent or guardian and become aware that your child has
              provided us with Personal Data without your consent, please
              contact us immediately. If we discover that we have collected
              Personal Data from children without parental consent, we will take
              prompt steps to remove that information from our servers.
            </p>

            {/* Section 11: Changes to This Privacy Policy */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mb-8">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. We will notify you of any
              significant changes by posting the new Privacy Policy on this page
              and updating the "Effective Date" at the top. We encourage you to
              review this Privacy Policy periodically for any changes. Changes
              to this Privacy Policy are effective when they are posted on this
              page.
            </p>

            {/* Section 12: Contact Us */}
            <h2 className="text-left mt-12 mb-6 text-purple-700">
              12. Contact Us
            </h2>
            <p>
              Should you have any questions about this Privacy Policy, wish to
              exercise your data protection rights, or have any other inquiries
              regarding our data practices, please do not hesitate to contact
              us:
            </p>
            <ul className="mb-8">
              <li>
                By email:{' '}
                <a
                  href="mailto:privacy@indabaxcv.org"
                  className="text-purple-600 hover:underline"
                >
                  privacy@indabaxcv.org
                </a>
              </li>
              <li>
                Via our Contact Page:{' '}
                <Link to="/contact" className="text-purple-600 hover:underline">
                  indabaxcv.org/contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicyPageTemplate;
