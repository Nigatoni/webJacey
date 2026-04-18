import { ProjectLayout, ProjectSection, ProjectImage, ProjectDescription, MarbleBar } from "@/components/portfolio/project-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "IP & Comic Project | Jacey Han",
  description: "Mimi Mission - A digital social media based comic for emotional reflection and connection",
}

export default function IPComicPage() {
  return (
    <ProjectLayout title="Personal Works" subtitle="IP & COMIC PROJECT">
      {/* Mimi Mission Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#000000]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Mimi Mission
          </h2>
          <ProjectDescription>
            <p className="mb-4">
              Mimi Mission is a digital social media based comic created as a space for emotional reflection and connection, especially for young artists navigating uncertainty, burnout, and self-doubt.
            </p>
            <p>
              Rather than offering advice or solutions, the comic functions as a companion allowing readers to resonate with the story, reflect on their own feelings, and gain new perspectives that gently encourage them to continue their journey.
            </p>
          </ProjectDescription>
        </div>
        <ProjectImage 
          src="/MIMI%20FIX.png"
          alt="Mimi Mission characters - cute mushroom-shaped creatures"
          className="block max-w-[80%] mx-auto lg:mx-0 lg:ml-12 lg:-mt-60"
        />
      </div>

      {/* Mimi Character Sheet */}
      <ProjectSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/MIMI%20FIX%202.png"
            alt="Mimi character expressions"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <ProjectDescription>
            <p className="mb-4">
              Mimi is small and looks like a mushroom-shaped blob. She is playful, curious, and always positive. She was sent to help humans solve their problems, even though she does not fully understand what a &quot;problem&quot; really is. To her, if someone feels unhappy, then she should help.
            </p>
            <p>
              She carries small gadgets from her world tools meant to help humans reach happiness no matter what their problems are. These gadgets are made too magically solve human problem physically and efficient outside human&apos;s skill or technology reach.
            </p>
          </ProjectDescription>
        </div>
      </ProjectSection>

      {/* Comic Character Sheet */}
      <ProjectSection title="COMIC CHARACTER SHEET">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex items-start justify-center lg:order-2">
            <Image
              src="/Uijin.png"
              alt="Uijin illustration"
              width={1000}
              height={800}
              className="w-full h-auto max-w-[24rem] lg:max-w-[40rem]"
            />
          </div>
          <div className="lg:order-1">
            <h3 className="text-3xl font-serif mb-2">Vera, 17 <span className="text-xl text-foreground/70">(Highschool)</span></h3>
            <ProjectDescription>
              <p>
                Vera is a calm and laid-back 17-year-old who lives an ordinary life, blending easily into her daily routines. She values personal meaning over academic achievement, preferring to grow through her own interests especially drawing rather than seeking attention or competition. Beneath her quiet nature, she holds an unspoken desire to become something through what she loves.
              </p>
            </ProjectDescription>
          </div>
        </div>
      </ProjectSection>

      {/* Panel Examples */}
      <ProjectSection title="PANEL EXAMPLES">
        <div className="grid grid-cols-2 gap-6 lg:gap-8">
          <Image
            src="/Page%201.png"
            alt="Comic panel examples - page 1"
            width={700}
            height={600}
            className="w-full h-auto"
          />
          <Image
            src="/Page%202.png"
            alt="Comic panel examples - page 2"
            width={700}
            height={600}
            className="w-full h-auto"
          />
          <Image
            src="/Page%203.png"
            alt="Comic panel examples - page 3"
            width={700}
            height={600}
            className="w-full h-auto"
          />
          <Image
            src="/Page%204.png"
            alt="Comic panel examples - page 4"
            width={700}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
