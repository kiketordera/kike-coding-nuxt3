<template>
  <section>
    <div class="content">
      <h1>Legal content</h1>
      <h2>
        Liability for Content
      </h2>
      <p>
        We have made every effort to ensure the accuracy and completeness of the content on our pages. However, we cannot guarantee
        the correctness, completeness, or current relevance of the content. As a service provider, our responsibility for our own
        content on these pages is in accordance with general laws. As a service provider, we are not required to monitor third-party
        information that is transmitted or stored, nor are we required to investigate circumstances that suggest illegal activities.
        The responsibility to remove or block the use of information under general laws remains intact. Liability in this regard can
        only be assumed from the moment we become aware of a specific legal violation. Upon becoming aware of such violations, we will
        promptly remove the offending content.
      </p>
      <h2>
        Liability for Links
      </h2>
      <p>
        Our website contains links to external websites owned by third parties, and we have no control over the content of these sites.
        Consequently, we cannot be held responsible for the content of these third-party sites. The individual provider or operator of
        the linked pages is responsible for their content. At the time of linking, the linked pages were examined for potential legal
        violations, and no unlawful content was identified. Continuously monitoring the content of linked pages without concrete evidence
        of legal violations is unreasonable. If we become aware of any legal violations, we will remove the associated links immediately.
      </p>

      <h2>Copyright</h2>
      <p>
        The content and works on our website, are subject to European & international copyright law. The reproduction,
        modification, distribution, and any form of exploitation beyond the scope of copyright law require written consent from the
        respective author or creator. Downloads and copies of this website are permitted for private, non-commercial use only. In cases
        where the content on this site was not created by the operator, third-party copyrights have been respected. Specifically,
        third-party content is identified as such. If you become aware of a copyright infringement, please notify us accordingly.
        Upon becoming aware of legal violations, we will immediately remove the offending content.
      </p>
      <div v-if="showBusinessInformation">
        <h2>Company information</h2>
        <ul>
          <li><b>Registration:</b> {{ registration }}</li>
          <li><b>Contact:</b> {{ contact }}</li>
        </ul>
      </div>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines our practices and procedures regarding the collection, utilization, and disclosure of your
        information when you access and use our Service. It also informs you about your privacy rights and the legal protection available to you.

        By using our Service, you consent to the gathering and usage of your information in compliance with this Privacy Policy.
      </p>
      <h1>Interpretation and Definitions</h1>
      <h2>Interpretation</h2>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following
        definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      <h2>Definitions</h2>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li>
          <b>Personal Data:</b> refers to any information connected to an identified or identifiable person (referred to as "data subject").
          Identifiable individuals can be recognized directly or indirectly via identifiers such as names, identification numbers, location
          data, online identifiers, or other factors related to their physical, physiological, genetic, mental, economic, cultural, or
          social identity.
        </li>
        <li>
          <b>Data Subject:</b> an identified or identifiable person whose personal data is processed by the controller.
        </li>
        <li>
          <b>Processing:</b> encompasses any operation or set of operations, with or without automated means,
          involving personal data. This includes collecting, recording, organizing, structuring, storing, adapting, altering,
          retrieving, consulting, using, disclosing through transmission, disseminating, making available, aligning, combining,
          restricting, erasing, or destroying personal data.
        </li>
        <li>
          <b>Restriction of Processing:</b> involves marking stored personal data with the goal of limiting
          future processing.
        </li>
        <li>
          <b>Profiling:</b> refers to automated processing of personal data that uses such data to assess specific personal
          aspects related to an individual, particularly for analyzing or predicting aspects regarding job performance, economic situation,
          health, personal preferences, interests, reliability, behavior, location, or movement.
        </li>
        <li>
          <b>Pseudonymization:</b> is the process of modifying personal data so that it can no longer be associated with
          a specific data subject without the use of additional information. This additional information must be kept separately and be
          subject to technical and organizational measures that ensure personal data cannot be connected to an identified or identifiable person.
        </li>
        <li>
          <b>Controller or Data Controller:</b> is a natural or legal person, public authority, agency, or
          another body that determines the purposes and means of personal data processing, either alone or with others. If the purposes and
          means of processing are set by Union law or Member State law, the controller or the specific criteria for its nomination may be
          provided by Union or Member State law.
        </li>
        <li>
          <b>Processor:</b> is a natural or legal person, public authority, agency, or another body that processes personal data on behalf
          of the controller.
        </li>
        <li>
          <b>Recipient:</b> a natural or legal person, authority, institution, or other entity to which personal data is disclosed, regardless
          of whether it is a third party. However, public authorities that may receive personal data under Union or national law within the
          scope of a particular investigative mandate are not considered recipients.
        </li>
        <li>
          <b>Third Party:</b> a natural or legal person, public authority, agency, or body other than the data subject, controller, processor,
          and individuals authorized to process personal data under the direct authority of the controller or processor.
        </li>
        <li>
          <b>Consent:</b> refers to any voluntary, informed, and unambiguous indication of the data subject's wishes in a specific case,
          given as a statement or another clear affirmative action, signifying their agreement to the processing of their personal data.
        </li>
      </ul>

      <h1>Collection & deletion</h1>
      <h2>Collection of General Data and Information</h2>
      <p>
        The website of The Data Controller gathers various general data and information with each visit to the website by a user or an automated
        system. This general data and information are saved in the server's log files. The collected data includes (1) browser types and versions
        used, (2) the operating system utilized by the accessing system, (3) the website from which an accessing system arrives at our website
        (referrer), (4) the sub-websites accessed via an accessing system on our website, (5) the date and time of access to the website, (6)
        an Internet Protocol (IP) address, (7) the Internet service provider of the accessing system, and (8) other similar data and information
        that serves to protect against threats in case of attacks on our information technology systems.
        <br>
        We do not use this general data and information to draw conclusions about the individual concerned. Instead, this information is
        necessary for (1) accurately delivering the content of our website, (2) optimizing the content of our website and its advertising,
        (3) ensuring the ongoing functionality of our information technology systems and website technology, and (4) providing law enforcement
        agencies with the information needed for prosecution in the event of a cyber-attack. The Data Controller uses the collected data and
        information for statistical evaluation and to improve data protection and data security within the company, ultimately aiming to
        ensure the highest level of protection for the personal data processed by us. The server log files' anonymous data is stored separately
        from any personal data provided by a user.
      </p>
      <h2>
        Routine Deletion and Blocking of Personal Data
      </h2>
      <p>
        The data controller processes and stores the personal data of the data subject only for the time necessary to achieve the processing
        purpose or as provided by the European Directive and Regulation Giver or another legislator in laws or regulations to which the data
        controller is subject. <br>
        If the storage purpose no longer applies, or if a storage period prescribed by the European Directive and Regulation Giver or any other
        relevant legislator expires, the personal data will be anonymized or deleted routinely and in accordance with the law.
      </p>
      <h1>
        Rights of the data subject
      </h1>

      <h2>
        Right to confirmation
      </h2>
      <p>
        Every data subject has the right, granted by the European Directives and Regulations, to obtain confirmation from the controller as
        to whether personal data concerning them are being processed. If a data subject wishes to exercise this right of confirmation, they may
        contact an employee of the data controller at any time.
      </p>
      <h2>
        Right to information
      </h2>
      <p>
        Every person affected by the processing of personal data has the right, granted by the European Directive and Regulation Giver, to obtain
        information from the data controller about their stored personal data and a copy of this information at any time and free of charge.
        Additionally, the European Directive and Regulation Giver has granted the data subject access to the following information:
      </p>
      <ul>
        <li>The processing purposes</li>
        <li>The categories of personal data processed</li>
        <li>
          The recipients or categories of recipients to whom personal data has been or will be disclosed, particularly recipients in third
          countries or international organizations
        </li>
        <li>
          If possible, the planned duration for which personal data will be stored or, if not possible, the criteria for determining
          this duration
        </li>
        <li>
          The existence of a right to rectification or erasure of personal data concerning them or of a right to object to or limit
          the processing by the controller
        </li>
        <li>
          If the personal data are not collected from the data subject: All available information about the origin of the data
        </li>
        <li>
          The existence of automated decision-making, including profiling, in accordance with Article 22(1) and (4) of the GDPR and,
          at least in these cases, meaningful information about the logic involved and the scope and intended impact of such processing
          on the data subject
        </li>
      </ul>
      <p>
        Furthermore, the data subject has the right to know whether personal data has been transferred to a third country or an international
        organization. If this is the case, the data subject also has the right to obtain information about the appropriate safeguards related
        to the transfer. <br>

        If a data subject wishes to exercise this right of access, they may contact an employee of the controller at any time.
      </p>
      <h2>
        Right to rectification
      </h2>
      <p>
        Every person affected by the processing of personal data has the right, granted by the European Directives and Regulations,
        to request the immediate rectification of incorrect personal data concerning them. Moreover, the data subject has the right to
        request the completion of incomplete personal data, including by means of a supplementary statement, considering the purposes of
        the processing. <br>
        If a data subject wishes to exercise this right of rectification, they may contact an employee of the data controller at any time.
      </p>
      <h2>
        Right of Cancellation (Right to be Forgotten)
      </h2>
      <p>
        Any person affected by the processing of personal data has the right, granted by the European Directives and Regulations, to obtain
        from the controller the immediate deletion of personal data concerning them, if one of the following reasons applies and if the
        processing is not necessary:
      </p>
      <ul>
        <li>
          The personal data have been collected or otherwise processed for purposes for which they are no longer necessary.
        </li>
        <li>
          The data subject withdraws the consent on which the processing was based pursuant to Article 6(1)(a) of the GDPR or Article 9(2)(a)
          of the GDPR, and there is no other legal basis for the processing.
        </li>
        <li>
          The data subject lodges an objection to the processing pursuant to Art. 21(1) GDPR, and there are no overriding legitimate reasons
          for the processing, or the data subject lodges an objection to the processing pursuant to Art. 21(2) GDPR.
        </li>
        <li>
          The personal data were processed unlawfully.
        </li>
        <li>
          The deletion of the personal data is necessary to comply with a legal obligation under Union law or the law of the Member States
          to which the controller is subject.
        </li>
        <li>
          The personal data was collected in relation to information society services offered in accordance with Art. 8 Paragraph 1 GDPR.
        </li>
      </ul>
      <p>
        If one of the above-mentioned reasons applies and a data subject wishes to have personal data stored at The Data Controller deleted,
        they can contact an employee of the data controller at any time. The employee of The Data Controller will ensure that the request for
        deletion will be complied with immediately.
      </p>
      <p>
        If the personal data has been made public by The Data Controller and our company as the responsible person is obliged to delete the
        personal data according to art. 17 para. 1 GDPR, The Data Controller will take reasonable measures, also of a technical nature,
        considering the available technology and the implementation costs, to inform other data controllers who process the published personal
        data, that the data subject has requested from these other data controllers the deletion of all links to these personal data or of
        copies or replications of these personal data unless the processing is necessary. The employee of The Data Controller will arrange the
        necessary in individual cases.
      </p>
      <h2>
        Right to Restriction of Processing
      </h2>
      <p>
        Any person affected by the processing of personal data has the right, granted by the European Directives and Regulations, to request the
        controller to restrict the processing if one of the following conditions is met:
      </p>
      <ul>
        <li>
          The accuracy of the personal data is contested by the data subject, for a period that allows the controller to verify the accuracy of
          the personal data.
        </li>
        <li>
          The processing is unlawful, the data subject refuses to have the personal data deleted and instead requests the restriction of the use
          of the personal data.
        </li>
        <li>
          The controller no longer needs the personal data for the purposes of the processing, but the data subject needs them to assert,
          exercise, or defend legal claims.
        </li>
        <li>
          The data subject has lodged an objection to the processing in accordance with Art. 21 (1) GDPR, and it is not yet clear whether
          the justified reasons of the controller outweigh those of the data subject.
        </li>
      </ul>
      <p>
        If one of the above-mentioned conditions is met and a data subject wishes to request the restriction of personal data stored, they
        may contact the company directly. The company will initiate the restriction of the processing.
      </p>

      <h2>
        Right to data transferability
      </h2>
      <p>
        Any person affected by the processing of personal data has the right, granted by the European Directives and Regulations, to receive
        the personal data concerning him/her, which have been provided by the data subject to a data controller, in a structured, common,
        and machine-readable format. Additionally, they have the right to have this data communicated to another controller without hindrance
        by the controller to whom the personal data has been made available, provided that the processing is based on the consent pursuant
        to Art. 6 paragraph 1 letter a GDPR or Art. 9 paragraph 2 letter a GDPR or on a contract pursuant to Art. 6 paragraph 1 letter b GDPR
        and that the processing is carried out with the aid of automated procedures, unless the processing is necessary for the performance
        of a task carried out in the public interest or in the exercise of official authority vested in the controller.

        Furthermore, when exercising their right to data transfer pursuant to Art. 20 Paragraph 1 GDPR, the data subject has the right to obtain
        that personal data be transferred directly from one controller to another controller, insofar as this is technically feasible and
        provided that this does not adversely affect the rights and freedoms of other persons.

        To assert the right to data transferability, the person concerned can contact an employee of The Data Controller at any time. The
        employee will assist in facilitating the data transfer request and ensure that the data is provided in the appropriate format or
        transferred to the requested controller, as long as it is technically feasible and does not infringe upon the rights
        and freedoms of others.
      </p>
      <h2>
        Right of Objection
      </h2>
      <p>
        Every person affected by the processing of personal data has the right, granted by the European Directive and Regulation Giver,
        to object at any time, for reasons arising from their particular situation, to the processing of personal data concerning them
        that is carried out on the basis of Art. 6(1)(e) or (f) of the GDPR. This also applies to profiling based on these provisions.

        In the event of an objection, The Data Controller will no longer process the personal data, unless it can prove compelling
        reasons for processing worthy of protection that outweigh the interests, rights, and freedoms of the person concerned, or the
        processing serves the assertion, exercise, or defense of legal claims.

        If The Data Controller processes personal data to carry out direct advertising, the person concerned has the right to object
        at any time to the processing of personal data for the purpose of such advertising. This also applies to profiling, as far as
        it is related to such direct advertising. If the data subject objects to The Data Controller to the processing for the purpose of
        direct marketing, The Data Controller will no longer process the personal data for these purposes.

        In addition, the data subject has the right to object, for reasons arising from their particular situation, to the processing
        of personal data concerning them that is carried out at The Data Controller for scientific or historical research purposes or for
        statistical purposes in accordance with Art. 89 para. 1 GDPR, unless such processing is necessary for the performance of a task
        in the public interest.

        In order to exercise the right of objection, the data subject may directly contact any employee of The Data Controller or any other
        employee. The data subject is also free to exercise their right of objection in connection with the use of information society
        services, notwithstanding Directive 2002/58/EC, by means of automated procedures involving technical specifications.
      </p>
      <h2>
        Automated Individual Decision-Making, Including Profiling
      </h2>
      <p>
        Every person concerned by the processing of personal data has the right, granted by the European Directives and Regulations,
        not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning
        them or significantly affects them in a similar way, provided that the decision (1) is not necessary for the conclusion or
        performance of a contract between the data subject and the controller, or (2) is authorized by Union or national legislation to
        which the controller is subject and such legislation provides for adequate safeguards of the rights and freedoms and legitimate
        interests of the data subject, or (3) is taken with the explicit consent of the data subject.

        If the decision is (1) necessary for the conclusion or performance of a contract between the data subject and the controller, or (2)
        is taken with the express consent of the data subject, The Data Controller shall take appropriate measures to safeguard the rights and
        freedoms as well as the legitimate interests of the data subject, which shall include at least the right to obtain the intervention
        of a person from the controller, to express their point of view and to challenge the decision.

        If the data subject wishes to exercise rights relating to automated decisions, they may at any time contact an employee of
        the controller.
      </p>
      <h2>
        Right to revoke a data protection consent
      </h2>
      <p>
        Every person affected by the processing of personal data has the right, granted by the European Directive and Regulation Giver,
        to revoke their consent to the processing of personal data at any time. <br>

        If the data subject wishes to exercise his or her right to withdraw consent, he or she may contact an employee of the data controller
        at any time.
      </p>

      <h1>
        Data protection provisions on the application and use of Google AdWords
      </h1>
      <p>
        The data controller has integrated Google AdWords on this website. Google AdWords is an Internet advertising service that allows
        advertisers to place ads in Google's search engine results and the Google advertising network. Google AdWords enables advertisers
        to specify pre-defined keywords that trigger an ad to appear in Google's search engine results only when the user retrieves a
        keyword-relevant search result. In the Google advertising network, ads are distributed to topic-relevant websites using an
        automatic algorithm and according to the previously defined keywords.<br>

        The operating company of Google AdWords services is Google Inc, 1600 Amphitheater Pkwy, Mountain View, CA 94043-1351, USA.<br>

        When a data subject reaches our website via a Google ad, Google places a so-called conversion cookie on the data subject's information
        technology system. A conversion cookie loses its validity after thirty days and does not serve to identify the data subject. If
        the cookie has not expired, the conversion cookie is used to determine whether certain sub-pages, such as the shopping cart from
        an online store system, have been accessed on our website. The conversion cookie allows both us and Google to track whether a person
        who reached our website via an AdWords ad generated sales, i.e., completed or abandoned a purchase.<br>

        The data and information collected through the use of the conversion cookie are used by Google to create visit statistics for our
        website. These visit statistics are used by us to determine the total number of users referred to us via AdWords ads, i.e., to
        ascertain the success or failure of the respective AdWords ad and to optimize our AdWords ads for the future. Neither our company
        nor other Google AdWords advertisers receive information from Google that could be used to identify the individual.<br>

        Through the conversion cookie, personal information, such as the websites visited by the data subject, is stored. Whenever our
        website is visited, personal data, including the IP address of the internet connection used by the data subject, is transmitted
        to Google in the United States of America. This personal data is stored by Google in the United States of America. Google may pass
        on this personal data collected through the technical process to third parties.<br>

        The data subject can prevent the setting of cookies by our website, as described above, at any time by adjusting the settings in
        the internet browser used and thus permanently object to the setting of cookies. Such a setting in the internet browser used would
        also prevent Google from setting a conversion cookie on the data subject's information technology system. Additionally, a cookie
        already set by Google AdWords can be deleted at any time via the internet browser or other software programs.<br>

        Furthermore, the data subject has the option to object to interest-based advertising by Google. To do so, the data subject must
        access <a href="https://www.google.com/settings/ads">www.google.com/settings/ads</a>  from any of the internet browsers they use and make
        the desired settings there.<br>

        For more information and the applicable data protection provisions of Google, please refer to their privacy policy.
      </p>
      <h1>
        Data protection provisions on the application and use of Google Analytics
      </h1>
      <p>
        If you have given your consent through our cookie banner, Google Analytics, a web analysis service provided by Google LLC,
        is used on this website. The responsible service provider in the EU is Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Ireland ("Google").
      </p>
      <h3>Scope of processing</h3>
      <p>
        Google Analytics uses cookies that enable an analysis of your use of our website. The information collected by the cookies about your use
        of this website is usually transmitted to a Google server in the USA and stored there.

        We use the 'anonymizeIP' function (so-called IP masking): Due to the activation of IP anonymization on this website, your IP address
        will be shortened by Google within member states of the European Union or in other contracting states of the Agreement on the
        European Economic Area. The full IP address will only be sent to a Google server in the USA and shortened there in exceptional cases.
        The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data.
        During your visit to the website, the following data is recorded:
      </p>
      <ul>
        <li>
          The pages you have visited, your "click path"
        </li>
        <li>
          Achievement of "website goals" (conversions, e.g., newsletter registrations, downloads, purchases)
        </li>
        <li>
          Your user behavior (e.g., clicks, length of stay, bounce rates)
        </li>
        <li>
          Your approximate location (region)
        </li>
        <li>
          Your IP address (in abbreviated form)
        </li>
        <li>
          Technical information about your browser and the devices you use (e.g., language setting, screen resolution)
        </li>
        <li>
          Your internet provider
        </li>
        <li>
          The referrer URL (via which website / via which advertising material you came to this website)
        </li>
      </ul>
      <h3>Purposes of processing</h3>
      <p>
        On behalf of the operator of this website, Google will use this information to evaluate your (anonymized) use of the
        website, to compile reports on website activity, and to provide other services relating to website activity and internet
        usage to the website operator. The reports provided by Google Analytics are used to analyze the performance of our website
        and the success of our marketing campaigns.
      </p>
      <h3>Recipient</h3>
      <p>
        The data recipient is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland as data processor. For this
        purpose, we have concluded a contract with Google for order processing. Google LLC, headquartered in California, USA, and,
        if applicable, US authorities can access the data stored at Google.
      </p>
      <h3>
        Transfer to third countries
      </h3>
      <p>
        A transfer of data to the USA cannot be excluded. Google Ireland Limited is certified under the "Privacy Shield"
        <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI">
          https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI
        </a>
        and thus guarantees compliance with European data protection regulations.
      </p>
      <h3>
        Duration of storage
      </h3>
      <p>
        The data sent by us and linked to cookies, user IDs (e.g., user ID) or advertising IDs will be automatically deleted after
        14 months. Data whose retention period has been reached is automatically deleted once a month.
      </p>
      <h3>
        Rights of the data subjects
      </h3>
      <p>
        You can revoke your consent at any time with effect for the future by preventing the storage of cookies through a corresponding
        setting in your browser software; however, we would like to point out that in this case, you may not be able to use all the
        functions of this website to their full extent.
      </p>
      <p>
        You can also prevent the collection of data generated by the cookie and related to your use of the website (including your IP address)
        to Google and the processing of this data by Google by downloading and installing the browser add-on. Opt-out cookies prevent the future
        collection of your data when visiting this website. To prevent Universal Analytics from collecting data across different devices,
        you must opt-out on all systems used. If you click here, the opt-out cookie will be set: Disable Google Analytics.
      </p>
      <h1>
        Legal basis of the processing
      </h1>
      <p>
        The legal basis of processing personal data is established under the GDPR (General Data Protection Regulation).
        According to Art. 6 I lit. a GDPR, a company has a legal basis for processing operations when consent is obtained for a specific
        processing purpose.

        If personal data processing is necessary for performing a contract, such as providing goods or services, the processing
        is based on Art. 6 I lit. b GDPR. The same applies to processing operations necessary for implementing pre-contractual measures,
        such as inquiries about products or services.

        If a company is subject to a legal obligation that requires personal data processing, such as tax obligations, the processing is
        based on Art. 6 I lit. c GDPR. In rare cases, processing personal data may be necessary to protect the vital interests of the data
        subject or another natural person (e.g., medical emergencies), in which case the processing would be based on Art. 6 I lit. d GDPR.

        Lastly, processing operations may be based on Art. 6 I lit. f GDPR if they are necessary to safeguard a legitimate interest of the
        company or a third party, as long as the data subject's interests, fundamental rights, and freedoms do not override those legitimate
        interests. The European legislator specifically mentioned that a legitimate interest could be assumed if the data subject is a
        customer of the data controller (Recital 47 Sentence 2 GDPR).
      </p>
      <h1>Legitimate interests in the processing that are being pursued by the controller or a third party</h1>
      <p>
        When the processing of personal data is based on Article 6 I lit. f GDPR, the legitimate interests pursued by the controller or
        a third party can include carrying out business activities for the benefit of the well-being of all employees and shareholders.
        This means that the processing of personal data may be justified when it supports the company's goals, such as improving efficiency,
        enhancing services, or ensuring the overall success and profitability of the business.

        However, it is essential to ensure that these legitimate interests do not override the fundamental rights and freedoms of the data
        subjects. In any case where the processing of personal data is based on legitimate interests, a careful balance must be struck between
        the interests of the company and the rights and freedoms of the individuals concerned.
      </p>
      <h1>
        Duration for which the personal data will be stored
      </h1>
      <p>
        The duration for which personal data will be stored depends on the purpose of the data processing. Once the purpose is fulfilled,
        the data will be deleted unless legal retention periods require further storage.
      </p>
      <h1>
        Legal or contractual provisions on the provision of personal data; necessity for the conclusion of the contract; obligation of
        the data subject to provide the personal data; possible consequences of not providing the data
      </h1>
      <p>
        There may be legal or contractual provisions that require the provision of personal data. For example, tax regulations may
        mandate the submission of specific personal data, or contractual obligations may necessitate the exchange of information about
        the contractual partner. In some cases, it may be necessary for a data subject to provide personal data in order to enter into
        a contract. If the data subject fails to provide the required personal data, the contract may not be concluded.

        Before providing personal data, a data subject should contact an employee of the company. The employee will clarify on a case-by-case
        basis whether the provision of personal data is required by law or contract, whether there is an obligation to provide the personal data,
        and what the consequences of not providing the personal data would be.
      </p>
      <h1>
        Existence of automated decision-making
      </h1>
      <p>
        As a responsible company, automated decision-making is avoided to ensure that individual rights and freedoms are not adversely affected.
      </p>
    </div>
    <hr>
    <div class="copyright">
      <p>Copyright © {{ getCurrentYear() }} Kike Tordera. All Rights Reserved</p>
    </div>
  </section>
</template>

<script lang="ts" setup>

const showBusinessInformation = false

const registration = 'MyCompany S.L. | B45531122 | Ronda La Coruña 24 | 23006 Sevilla (Spain)'
const contact = '+34655001002 | hello@mywebsite.com | www.mywebsite.com'

useSeoMeta({ robots: 'noindex' })

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear()
  if (currentYear >= 2023) {
    return currentYear
  } else {
    return 2023
  }
}

</script>

<style lang="scss" scoped>
section {
    @apply max-w-5xl w-full mx-auto pt-24 sm:mb-4;
    .content {
        @apply mx-2 items-center py-8;

     h1 {
        @apply text-2xl md:text-4xl font-light pt-10 lowercase md:uppercase mb-4;
      }
     h2 {
        @apply text-xl md:text-2xl font-light pt-8 lowercase md:uppercase mb-4;
      }

      h3 {
          @apply text-2xl mb-2 pt-4;
      }
      h1,
      h2,
      h3 {
        font-family: 'Noir Pro Bold';
        color: $background-color;
      }
      p {
          @apply text-base mb-4;
      }

      ul li {
        list-style-type: disc;
        margin-left: 1rem;
      }
    }
}

  .copyright {
     p {
      @apply py-6 lg:text-xl text-sm text-center;
      color: #595959;
     }
  }

</style>
