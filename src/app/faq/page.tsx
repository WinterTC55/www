import { Links } from '@/components/Links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
}

export default function Faq() {
  return (
    <>
      <Links selected="/faq" />
      <section className="mt-12 text-lg space-y-10">
        <div className="space-y-4">
          <div id="what-is-the-wintercg"></div>
          <a href="#what-is-wintertc" id="what-is-wintertc">
            <h2 className="text-2xl font-medium">What is WinterTC?</h2>
          </a>
          <p>
            The Technical Committee on Web-interoperable Server Runtimes
            (WinterTC) is a community of people who are interested in
            interoperability across server-side (Deno / Node.js) or edge
            JavaScript runtimes (Cloudflare Workers / Deno Deploy), especially
            for Web Platform APIs.
          </p>
          <p>
            WinterTC is organized as Ecma International&apos;s{' '}
            <a
              href="https://ecma-international.org/technical-committees/tc55/"
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              Technical Committee number 55 (TC55)
            </a>
            . This gives the group access to Ecma&apos;s vast infrastructure and
            its IPR policy work, as well as the ability to publish standards.
            This is the same type of committee as{' '}
            <a
              href="https://tc39.es/"
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              TC39
            </a>
            , which standardizes the JavaScript language.
          </p>
        </div>
        <div className="space-y-4">
          <a href="#what-are-we-trying-to-do" id="what-are-we-trying-to-do">
            <h2 className="text-2xl font-medium">
              What are we trying to do?
            </h2>
          </a>
          <p>
            The ultimate goal of this committee is to promote runtimes supporting
            a comprehensive unified API surface that JavaScript developers can
            rely on, regardless of whether their code will be used in browsers,
            servers, or edge runtimes.
          </p>
          <p>
            It is another goal of WinterTC that runtimes with needs for
            capabilities beyond web platform APIs, in particular server-side and
            edge runtimes, still have unified surfaces.
          </p>
          <p>
            The members of the committee want to provide a space to better
            coordinate between server-side implementors, as well as with browser
            vendors, on how to best achieve this interoperability.
          </p>
          <p>
            It is not explicitly a goal of WinterTC to promote such a unified
            API surface for other JavaScript environments, such as embedded
            applications. However, the results of our work could be useful to
            such environments nonetheless.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="#how-do-we-want-to-achieve-our-goals"
            id="how-do-we-want-to-achieve-our-goals"
          >
            <h2 className="text-2xl font-medium">
              How do we want to achieve our goals?
            </h2>
          </a>
          <p>
            We want to specify and document how server side runtimes can best
            implement Web Platform APIs and to what extent they could deviate
            from browsers.
          </p>
          <p>
            We want to provide feedback to spec authors of Web Platform APIs from
            the view point of non-browser runtimes to help them make informed
            decisions about future changes and additions to these
            specifications.
          </p>
          <p>
            We want to develop and specify new APIs that, although they might be
            too powerful for the Web Platform or not fit within its security
            model, would still be a great fit for server-side runtimes and would
            be part of a comprehensive unified API surface for such runtimes.
          </p>
        </div>
        <div className="space-y-4">
          <a href="#why-are-we-doing-this" id="why-are-we-doing-this">
            <h2 className="text-2xl font-medium">Why are we doing this?</h2>
          </a>
          <p>
            The members of this group all share the belief that a comprehensive
            unified API surface for JS runtimes is something that would benefit
            the JS community as a whole. In the past members have individually
            worked on making this a reality.
          </p>
          <p>
            This disparate approach with little coordination has historically led
            to much confusion between not just browser vendors, spec authors, and
            other implementors, but also between non browser implementors and
            other non browser implementors on topics of unified API. This was
            often caused by the fact that discussions were spread over various
            disparate issue and PR comments with often little context or cohesion
            between them.
          </p>
          <p>
            We think that by working together more tightly we can provide browser
            vendors and specification editors with more meaningful feedback from
            users of non-browser JS runtimes. This will help them make informed
            decisions about future specification changes that relate to the goal
            of a comprehensive unified API surface for JS runtimes.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="#what-we-are-not-trying-to-do"
            id="what-we-are-not-trying-to-do"
          >
            <h2 className="text-2xl font-medium">
              What are we NOT trying to do?
            </h2>
          </a>
          <p>
            We do not want to fork or create new versions of existing
            specifications. If we think a new web platform API is needed, or if
            we think an existing spec needs changes, the goal is always for that
            change or addition to be developed in an existing venue (such as
            WHATWG or W3C). WinterTC will publish requirements on what those
            changes could be, and it will be up to that existing standards body
            to make these changes, possibly through members who are part of both
            WinterTC and that standards body.
          </p>
          <p>
            We do not want to create new server-side APIs that overlap with
            existing web platform APIs. If there is a proposed or standardized
            web API that overlaps with the needs of server-side runtimes, the
            goal is always to investigate what changes (if any) it would need to
            be useful for servers; and once those changes have been incorporated
            to the specification, to eventually add the API to the minimum
            common set.
          </p>
          <p>
            We are not trying to shift the focus of Web Platform APIs to only
            serve server-side runtimes. We want to see more API surface that is
            useful and works great both in browsers and on the server.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="#is-this-the-same-as-wintercg"
            id="is-this-the-same-as-wintercg"
          >
            <h2 className="text-2xl font-medium">
              Is this the same as &quot;WinterCG&quot;?
            </h2>
          </a>
          <p>
            We initially started our work of working on this cross-runtime
            interoperability in May 2022 by creating the Web-interoperable
            Runtimes Community Group (nicknamed WinterCG) under the W3C. We
            chose to organize it as a W3C Community Group because it was open for
            anyone to participate, without needing to be a W3C member.
          </p>
          <p>
            W3C Community Groups are set up to help people organize together, but
            they can&apos;t publish standards. And as WinterCG matured, and our
            goal expanded over time to include defining non-web APIs, it became
            clear that we needed to form some working group or technical
            committee, which can publish standards. Therefore, in December 2024
            we formed WinterTC (formally, TC55) as an Ecma International
            Technical Committee. When WinterTC is fully set up, all WinterCG work
            will move there, and then WinterCG will close.
          </p>
        </div>
        {/* TODO: Uncomment and rewrite when we've figured out TC55's process.
        <div className="space-y-4">
          <div id="does-the-wintercg-operate-by-consensus"></div>
          <a
            href="#does-wintertc-operate-by-consensus"
            id="does-wintertc-operate-by-consensus"
          >
            <h2 className="text-2xl font-medium">
              Does WinterTC operate by consensus?
            </h2>
          </a>
          <p>
            The group strives for rough consensus among contributors for changes
            to work products. Instead of formal consensus, the editors for a
            given work product make the judgement on whether a change is ready
            for inclusion and has enough support from the group. The group
            itself has a strict consensus policy outlined in the charter, which
            is overseen by the group chairs.
          </p>
        </div>
        */}
        <div className="space-y-4">
          <div id="who-controls-the-wintercg"></div>
          <a href="#who-controls-wintertc" id="who-controls-wintertc">
            <h2 className="text-2xl font-medium">Who controls WinterTC?</h2>
          </a>
          <p>
            WinterTC is controlled by the community of people who are working in
            it. The chair(s) of the group help moderate discussion and help guide
            the group towards consensus on proposed changes.
          </p>
          <p>
            Currently the group consists of individual members, as well as
            members from the following organizations:
          </p>
          <ul className="list-disc pl-7">
            <li>Bloomberg</li>
            <li>Cloudflare</li>
            <li>Deno</li>
            <li>Igalia</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="space-y-4">
          <a href="#how-can-i-participate" id="how-can-i-participate">
            <h2 className="text-2xl font-medium">How can I participate?</h2>
          </a>
          <p>
            The work of WinterTC happens openly{' '}
            <a
              href="https://github.com/WinterTC55"
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              on Github
            </a>
            , and most of the discussion and conversation around it happens in{' '}
            <a
              href="https://matrix.to/#/#wintertc:matrix.org"
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              our Matrix room
            </a>
            . Anyone is welcome to participate in both of them.
          </p>
          <p>
            Only WinterTC delegates and invited experts can participate in
            WinterTC meetings, though. Delegates need to belong to an Ecma
            member organization, but anyone else who wants to be involved in
            WinterTC can become an invited expert. To do so, you can{' '}
            <a
              href="https://github.com/WinterTC55/admin/issues/new/choose"
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              open an issue
            </a>{' '}
            in the WinterTC admin repo.
          </p>
        </div>
      </section>
    </>
  )
}
