import { ProjectLayout, ProjectSection } from "@/components/portfolio/project-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Client Commissions | Jacey Han",
  description: "Commercial illustration commissions and client work by Jacey Han",
}

export default function CommissionsPage() {
  return (
    <ProjectLayout title="Commercial Works" subtitle="CLIENT COMMISSIONS">
      {/* First gallery */}
      <ProjectSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Image
            src="/comis1.png"
            alt="Commission illustration 1"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
          <Image
            src="/comis2.png"
            alt="Commission illustration 2"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </ProjectSection>

      {/* Second gallery */}
      <ProjectSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Image
            src="/comis3.png"
            alt="Commission illustration 3"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
          <Image
            src="/comis4.png"
            alt="Commission illustration 4"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
