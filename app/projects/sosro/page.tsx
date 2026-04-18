import { ProjectLayout, ProjectSection, ProjectDescription } from "@/components/portfolio/project-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sosro Competition | Jacey Han",
  description: "Packaging design entry for Sosro Teh Botol competition featuring Putri Ayu illustration",
}

export default function SosroPage() {
  return (
    <ProjectLayout title="Packaging Work" subtitle="SOSRO COMPETITION">
      <ProjectSection>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Image
            src="/Sosro.png"
            alt="Sosro Teh Botol packaging design with Putri Ayu illustration"
            width={1000}
            height={800}
            className="w-full h-auto"
          />
          <div className="lg:pt-8">
            <ProjectDescription>
              <p className="mb-4">
                Ilustrasi ini menonjolkan kecantikan Putri Ayu yang memancarkan keanggunan dan kekuatan batin, digambarkan hampir seperti sosok surgawi.
              </p>
              <p className="mb-4">
                Elemen mengalir melambangkan takdir dan hubungan tak terlihat yang menuntun pangeran kepadanya, sementara latar Bali dan Danau Batur merepresentasikan perjalanan fisik dan spiritualnya.
              </p>
              <p>
                Bunga dan warna hangat memperkuat nuansa sakral, romantis, dan harmonis antara cinta, alam, dan tradisi.
              </p>
            </ProjectDescription>
          </div>
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
