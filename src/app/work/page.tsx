import { Links } from '@/components/Links'
import { WorkItems } from '@/components/WorkItems'
import type { Metadata } from 'next'
import work from '../../../data/work.json'

export const metadata: Metadata = {
  title: 'Work',
}

export default function Work() {
  return (
    <>
      <Links selected="/work" />
      <p className="mt-12 text-lg">
        WinterTC is currently working on various standards to improve
        interoperability across server-side runtimes:
      </p>
      <WorkItems items={work.specs} repoPrefix="WinterTC55/" />
      <p className="mt-12 text-lg">
        We are also collaborating with other standards bodies to make web
        platform APIs more suitable to server-side runtimes:
      </p>
      <WorkItems items={work.collaborations} />
    </>
  )
}
