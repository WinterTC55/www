import { Links } from '@/components/Links'
import { Logos } from '@/components/Logos'

export default function Home() {
  return (
    <>
      <Links />
      <p className="mt-12 text-lg text-justify">
        WinterTC (TC55) is an Ecma International Technical Committee that aims
        to achieve some level of API interoperability across server-side
        JavaScript runtimes, especially for APIs that are common with the web.
        This is done by standardizing a{' '}
        <a
          href="https://min-common-api.proposal.wintertc.org"
          className="text-orange-500 hover:text-orange-700 hover:underline"
        >
          &quot;minimum common API&quot;
        </a>{' '}
        shared with the web that such runtimes should support, as well as by
        collaborating with web standards groups (WHATWG, W3C...) for new web APIs
        and changes to current web APIs. We also publish standards to add new
        interoperable server-side APIs.{' '}
        <a
          href="/faq"
          className="text-orange-500 hover:text-orange-700 hover:underline"
        >
          Learn more.
        </a>
      </p>
    </>
  )
}
