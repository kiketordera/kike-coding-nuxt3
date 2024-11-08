<template>
  <section>
    <div class="content">
      <h1>Cookies Policy</h1>
      <p>
        This Cookie Policy clarifies the nature of Cookies and their application by Us. It is important for You to review
        this policy in order to comprehend the kinds of cookies We utilize, the data We gather through Cookies, and how that data is employed.

        Typically, Cookies do not encompass any details that can personally recognize a user. However, the personal data We maintain about
        You might be connected to the information preserved in and acquired from Cookies. For additional details on Our practices for using,
        storing, and safeguarding your personal information, please consult our Privacy Policy.

        We refrain from preserving sensitive personal data, such as postal addresses, account passwords, and so on, in the Cookies We employ.
      </p>
      <h1>Interpretation and Definitions</h1>
      <h2>Interpretation</h2>
      <p>
        Terms with the initial letter capitalized possess definitions outlined under the specified conditions. These definitions maintain
        the same meaning irrespective of their appearance in singular or plural forms.
      </p>
      <h2>Definitions</h2>
      <p>
        In the context of this Cookie Policy:
      </p>
      <ul>
        <li>
          <b>Company</b> (also referred to as "the Company," "We," "Us," or "Our" in this Cookie Policy) pertains to the TermsFeed.com website.
        </li>
        <li>
          <b> Cookies</b> are small files placed on Your computer, mobile device, or any other device by a website, which contain information
          about your browsing history on that website, among other purposes.
        </li>
        <li>
          <b> Website</b> denotes {{ URL }}, accessible via {{ fullURL }}
        </li>
        <li>
          <b> You</b> signifies the individual accessing or using the Website, a company, or any legal entity for which such an individual
          is accessing or using the Website, as applicable.
        </li>
      </ul>
      <h1>
        Utilization of Cookies
      </h1>
      <h2>Categories of Cookies We Employ</h2>
      <p>
        Cookies can be classified as "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device
        after you go offline, whereas Session Cookies are eliminated as soon as you close your web browser.

        We utilize both session and persistent Cookies for the objectives outlined below:
      </p>
      <h3>Necessary / Essential Cookies</h3>
      <ul>
        <li>
          <b>Type:</b> Session Cookies
        </li>
        <li>
          <b> Managed by:</b> Us
        </li>
        <li>
          <b> Purpose:</b> These Cookies are crucial for offering You services accessible through the Website and allowing You to use some of
          its functions. They aid in authenticating users and preventing fraudulent use of user accounts. Without these Cookies, the services
          You request cannot be delivered, and We exclusively use these Cookies to supply You with those services.
        </li>
      </ul>
      <h3>
        Cookies Policy / Notice Acceptance Cookies
      </h3>
      <ul>
        <li>
          <b>Type:</b> Persistent Cookies
        </li>
        <li>
          <b> Managed by:</b> Us
        </li>
        <li>
          <b> Purpose:</b> These Cookies determine whether users have accepted the utilization of cookies on the Website.
        </li>
      </ul>
      <h3>
        Functionality Cookies
      </h3>
      <ul>
        <li>
          <b>Type:</b> Persistent Cookies
        </li>
        <li>
          <b> Managed by:</b> Us
        </li>
        <li>
          <b> Purpose:</b> These Cookies enable us to recall choices You make while using the Website, such as remembering your login
          information or language preference. The aim of these Cookies is to offer You a more personalized experience and to prevent
          You from having to re-enter your preferences each time You use the Website.
        </li>
      </ul>
      <h3>
        Tracking and Performance Cookies
      </h3>
      <ul>
        <li>
          <b>Type:</b> Persistent Cookies
        </li>
        <li>
          <b> Managed by:</b> Third-Parties
        </li>
        <li>
          <b> Purpose:</b> These Cookies are employed to gather information about traffic to the Website and how users engage with the Website.
          The data acquired via these Cookies may directly or indirectly identify you as a unique visitor. This is because the collected
          information is usually linked to a pseudonymous identifier associated with the device you use to access the Website. We might also
          use these Cookies to test new advertisements, pages, features, or new functionality of the Website to assess how our users respond
          to them.
        </li>
      </ul>

      <h1>
        Your Options Concerning Cookies
      </h1>
      <p>
        If You prefer not to use Cookies on the Website, first, You must deactivate the use of Cookies in your browser and then erase the Cookies
        saved in your browser linked to this website. You may use this alternative to prevent the use of Cookies at any time.

        If You decline Our Cookies, You might encounter some inconvenience while using the Website, and certain features may not operate
        correctly.

        If You wish to remove Cookies or instruct your web browser to delete or refuse Cookies, kindly visit the help pages of your web browser:
      </p>
      <ul>
        <li>
          <b>Chrome:</b> For the Chrome web browser, please visit this Google page:
          <a href="https://support.google.com/accounts/answer/32050">https://support.google.com/accounts/answer/32050</a>
        </li>
        <li>
          <b>IE:</b> For the Internet Explorer web browser, please visit this Microsoft page:
          <a href="http://support.microsoft.com/kb/278835">http://support.microsoft.com/kb/278835</a>
        </li>
        <li>
          <b>Firefox:</b> For the Firefox web browser, please visit this Mozilla page
          <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">
            https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
          </a>
        </li>
        <li>
          <b>Safari:</b> For the Safari web browser, please visit this Apple page:
          <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
            https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
          </a>
        </li>
        <li>
          <b>Other:</b> For any other web browser, please refer to your web browser's official web pages.
        </li>
      </ul>
      <h1>
        Contact Us
      </h1>
      <p>
        If you have any inquiries about this Cookie Policy, You can reach out to us:
        By visiting this page on our website <a :href="fullURL">{{ contactURL }}</a>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ContactInformation } from '~/data_helper/contact'

const URL = ContactInformation.URL
const fullURL = ContactInformation.fullURL
const contactURL = `${ContactInformation.fullURL}/contact`

useSeoMeta({ robots: 'noindex' })
</script>

<style lang="scss" scoped>
section {
    @apply w-full;
    background-color: $team-color;
    font-family: $source-code-regular;
    .content {
        @apply mx-2 items-center py-8 max-w-5xl mx-auto pt-24;
        color: white;
     h1 {
       @include title-kike-section;
       @apply text-2xl md:text-4xl font-light pt-10 lowercase md:uppercase mb-4;
       font-family: $source-code-black !important;
      }
      h2 {
        @include title-kike-section;
        @apply text-xl md:text-2xl font-light pt-8 lowercase md:uppercase mb-4;
        font-family: $source-code-black !important;
      }

      h3 {
        @apply text-2xl mb-2 pt-4;
        font-family: $source-code-black !important;
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

</style>
