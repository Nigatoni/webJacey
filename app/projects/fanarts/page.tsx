import { ProjectLayout, ProjectSection, ProjectImage } from "@/components/portfolio/project-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Illustration Fanarts | Jacey Han",
  description: "Fan art illustrations featuring characters from Death Note, Final Fantasy VII and more",
}

export default function FanartsPage() {
  return (
    <ProjectLayout title="Personal Works" subtitle="ILLUSTRATION FANARTS">
      <ProjectSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <ProjectImage
            src="/illus1.png"
            alt="Illustration 1"
            caption="Final Fantasy VII"
          />
          <ProjectImage
            src="/illus2.png"
            alt="Illustration 2"
            caption="Death Note"
          />
          <ProjectImage
            src="/illus3.png"
            alt="Illustration 3"
            caption="Death Note"
          />
          <ProjectImage
            src="/illus4.png"
            alt="Illustration 4"
            caption="Death Note"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
