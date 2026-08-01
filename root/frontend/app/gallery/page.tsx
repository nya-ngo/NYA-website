import type { Metadata } from "next";
import "./gallery.css";
import GalleryGrid, { type GalleryCategory } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery | NYA – NGO",
  description:
    "We captured the real life of rural communities for you. The gallery has images that give you a glimpse of various aspects of our projects & programs.",
};

const GALLERY_DATA: GalleryCategory[] = [
  {
    title: "Rural Education and Development (READ) Project",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-read1/600/450",
        caption: "After-School Education Program",
        description:
          "Our after-school program provides quality tutoring and learning support to children in rural villages, helping them build a brighter future.",
      },
      {
        src: "https://picsum.photos/seed/nya-read2/600/450",
        caption: "Village Knowledge Centre Program",
        description:
          "Village Knowledge Centres bring computers and internet access to remote communities, bridging the digital divide and empowering local youth.",
      },
      {
        src: "https://picsum.photos/seed/nya-read3/600/450",
        caption: "V-kid Knowledge Boost Program",
        description:
          "The V-kid program delivers interactive learning sessions and educational kits to primary school children, boosting foundational literacy skills.",
      },
      {
        src: "https://picsum.photos/seed/nya-read4/600/450",
        caption: "V-kid Scholarship Program",
        description:
          "Meritorious students from underprivileged families receive scholarships, enabling them to pursue higher education without financial barriers.",
      },
      {
        src: "https://picsum.photos/seed/nya-read5/600/450",
        caption: "Child Labor Prevention Program",
        description:
          "We work with families and local authorities to identify and rehabilitate child labourers, ensuring every child has the right to education.",
      },
      {
        src: "https://picsum.photos/seed/nya-read6/600/450",
        caption: "Quality & Value Education Program",
        description:
          "This program integrates life-skills, moral values, and creative thinking into the school curriculum, nurturing well-rounded individuals.",
      },
    ],
  },
  {
    title: "Building Positive Communities Project",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-bpc1/600/450",
        caption: "Hearts of Serving the Humanity Program",
        description:
          "Volunteers come together to serve marginalised communities through free health camps, food drives, and community support activities.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc2/600/450",
        caption: "Community Awareness & Empowerment Program",
        description:
          "Workshops empower community members with knowledge about their rights, government schemes, and pathways to self-sufficiency.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc3/600/450",
        caption: "Community Health & Safety Program",
        description:
          "Regular health screenings, first-aid training, and sanitation awareness campaigns help rural families stay safe and healthy.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc4/600/450",
        caption: "Community Swachh Bharat Program",
        description:
          "In alignment with the national Swachh Bharat Mission, our teams organise cleanliness drives and help construct sanitation facilities.",
      },
    ],
  },
  {
    title: "Women Empowerment Project",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-we1/600/450",
        caption: "Self-Help Group Formation",
        description:
          "Women-led Self-Help Groups provide microfinance, skills training, and a support network for rural women entrepreneurs.",
      },
      {
        src: "https://picsum.photos/seed/nya-we2/600/450",
        caption: "Vocational Training Program",
        description:
          "Tailoring, handloom weaving, and food-processing courses equip women with marketable skills and financial independence.",
      },
      {
        src: "https://picsum.photos/seed/nya-we3/600/450",
        caption: "Women Leadership Program",
        description:
          "Leadership workshops help women take active roles in village governance, community decision-making, and local advocacy.",
      },
    ],
  },
];



export default function GalleryPage() {
  return (
    <main className="gallery-main">
      {/* ── Page Header — warm cream, left-aligned ── */}
      <section className="gallery-header-section">
        <div className="gallery-header-inner">
          <div className="gallery-section-label">
            <span>Gallery</span>
          </div>
          <h1 className="gallery-header-heading">
            Moments from the field.
          </h1>
          <p className="gallery-header-sub">
            A glimpse of the people, places and progress that shape our work —
            captured in dust, sunlight and smiles.
          </p>
        </div>
      </section>

      {/* ── Category grids + lightbox ── */}
      <div className="gallery-page">
        <GalleryGrid categories={GALLERY_DATA} />
      </div>
    </main>
  );
}
