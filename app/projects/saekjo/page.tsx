import { ProjectLayout, ProjectSection, ProjectDescription, MarbleBar } from "@/components/portfolio/project-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saekjo Mascots | Jacey Han",
  description: "Mascot character designs for Saekjo Studio - Korean-inspired personal color analysis brand",
}

export default function SaekjoPage() {
  return (
    <ProjectLayout title="Mascot Project" subtitle="SAEKJO MASCOTS">
      {/* Hero section with all mascots */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
        <Image
          src="/Post%202.png"
          alt="Saekjo Studio mascots - four seasonal characters"
          width={1000}
          height={800}
          className="w-fit h-auto lg:-mt-[5cm]"
        />
        <div className="lg:pt-8">
          <div className="mb-6 flex justify-center">
            <Image
              src="/saekjo_logo.png"
              alt="Saekjo logo"
              width={200}
              height={100}
              className="mx-auto mb-4"
            />
          </div>
          <ProjectDescription>
            <p className="mb-4">
              Saekjo Studio is a Korean-inspired personal color analysis brand that blends professionalism with a friendly, subtly feminine identity.
            </p>
            <p className="mb-4">
              To strengthen its visual clarity, a mascot series was developed to represent the four seasonal color types, making each identity more distinct while reflecting Korean fashion aesthetics.
            </p>
            <p>
              Supported by a small guide character, the mascots create an engaging and approachable experience, helping clients confidently explore their personal colors while enhancing brand memorability across touchpoints.
            </p>
          </ProjectDescription>
        </div>
      </div>

      {/* Individual Character Sheets */}
      {/* Bom - Spring */}
      <ProjectSection>
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
          <div className="flex items-center gap-4 mb-8">
            <h2 
              className="text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Bom
            </h2>
            <MarbleBar className="flex-1 max-w-xs">
              <span className="text-background font-sans font-bold tracking-wider text-base px-6 py-3">
                SPRING SEASON
              </span>
            </MarbleBar>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/spring.png"
            alt="Bom character sheet - Spring Season"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <ProjectDescription>
            <p className="mb-4">
              Born from the first bloom of color, Bom carries warmth and cheer wherever she goes.
            </p>
            <p>
              Her flowy, cute charm and witty energy bring joy to those around her. Like spring sunshine, she reminds others that confidence can grow from kindness and curiosity.
            </p>
          </ProjectDescription>
        </div>
      </ProjectSection>

      {/* Aerum - Summer */}
      <ProjectSection>
        <div className="flex items-center gap-4 mb-8">
          <h2 
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Aerum
          </h2>
          <MarbleBar className="flex-1 max-w-xs">
            <span className="text-background font-sans font-bold tracking-wider text-base px-6 py-3">
              SUMMER SEASON
            </span>
          </MarbleBar>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/summer.png"
            alt="Aerum character sheet - Summer Season"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <ProjectDescription>
            <p className="mb-4">
              Aerum embodies the calm beauty of summer simple, fresh, and effortlessly graceful.
            </p>
            <p>
              With her clean and feminine aura, she inspires people to embrace natural elegance and feel comfortable in their own skin.
            </p>
          </ProjectDescription>
        </div>
      </ProjectSection>

      {/* Gaeul - Autumn */}
      <ProjectSection>
        <div className="flex items-center gap-4 mb-8">
          <h2 
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Gaeul
          </h2>
          <MarbleBar className="flex-1 max-w-xs">
            <span className="text-background font-sans font-bold tracking-wider text-base px-6 py-3">
              AUTUMN SEASON
            </span>
          </MarbleBar>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/autumn.png"
            alt="Gaeul character sheet - Autumn Season"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <ProjectDescription>
            <p className="mb-4">
              With wisdom beyond her years, Gaeul walks with the confidence of falling leaves and golden light.
            </p>
            <p>
              She radiates old-money sophistication and quiet ambition the achiever who builds her dreams with purpose, grace, and unwavering confidence.
            </p>
          </ProjectDescription>
        </div>
      </ProjectSection>

      {/* Chaerin - Winter */}
      <ProjectSection>
        <div className="flex items-center gap-4 mb-8">
          <h2 
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Chaerin
          </h2>
          <MarbleBar className="flex-1 max-w-xs">
            <span className="text-background font-sans font-bold tracking-wider text-base px-6 py-3">
              WINTER SEASON
            </span>
          </MarbleBar>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/winter.png"
            alt="Chaerin character sheet - Winter Season"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <ProjectDescription>
            <p className="mb-4">
              Chaerin is the sharp brilliance of winter striking, calm, and unapologetically genuine.
            </p>
            <p>
              She values honesty above all, speaking truth with clarity and grace. Beneath her cool aura lies warmth that only honesty can reveal.
            </p>
          </ProjectDescription>
        </div>
      </ProjectSection>

      {/* Sidekick Mascot - Dori */}
      <ProjectSection title="SIDE KICK MASCOT">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/maskot1.png"
            alt="Dori - Sidekick mascot"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <div>
            <h3 
              className="text-5xl md:text-6xl mb-6"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Dori
            </h3>
            <ProjectDescription>
              <p className="mb-4">
                Dori is the core mascot and the spirit creature of colors. They act as both the guide and bridge between people and their true tones, representing Saekjo&apos;s mission to help everyone discover the colors that bring out their best self.
              </p>
              <p>
                Inspired by Axolotl with her colourful earflaps simbolizing her personality as a colour guide and spirit. Dori is a curious, cheerful and optimistic creature to help anyone find their true colors.
              </p>
            </ProjectDescription>
          </div>
        </div>
      </ProjectSection>

      {/* Sidekick Mascot Sheet */}
      <ProjectSection title="SIDEKICK MASCOT SHEET">
        <Image
          src="/express.png"
          alt="Dori mascot character sheet with expressions"
          width={1400}
          height={800}
          className="w-full h-auto mb-8"
        />
      </ProjectSection>

      {/* Extras */}
      <ProjectSection title="EXTRAS">
        <Image
          src="/extras.png"
          alt="Dori mascot extras and variations"
          width={1400}
          height={800}
          className="w-full h-auto"
        />
      </ProjectSection>
    </ProjectLayout>
  )
}
