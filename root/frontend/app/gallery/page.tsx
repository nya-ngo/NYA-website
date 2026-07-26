import type { Metadata } from "next";
import "./gallery.css";
import GalleryGrid, { type GalleryCategory } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery | NYA – NGO",
  description:
    "We captured the real life of rural communities for you. The gallery has images that give you a glimpse of various aspects of our projects & programs.",
};

/* ─────────────────────────────────────────────
   Gallery Data
   Replace the `src` values with paths to your
   own images placed in /public/gallery/
   e.g.  src: "/gallery/read-1.jpg"
───────────────────────────────────────────── */
const GALLERY_DATA: GalleryCategory[] = [
  {
    title: "Rural Education and Development (READ) Project",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-read1/600/450",
        caption: "After-School Education Program",
        description:
          "Our after-school program provides quality tutoring and learning support to children in rural villages, helping them catch up with the curriculum and build a brighter future.",
      },
      {
        src: "https://picsum.photos/seed/nya-read2/600/450",
        caption: "Village Knowledge Centre Program",
        description:
          "Village Knowledge Centres bring computers and internet access to remote communities, bridging the digital divide and empowering local youth with 21st-century skills.",
      },
      {
        src: "https://picsum.photos/seed/nya-read3/600/450",
        caption: "V-kid Knowledge Boost Program",
        description:
          "The V-kid program delivers interactive learning sessions and educational kits to primary school children, boosting foundational literacy and numeracy skills.",
      },
      {
        src: "https://picsum.photos/seed/nya-read4/600/450",
        caption: "V-kid Scholarship Program",
        description:
          "Meritorious students from underprivileged families receive scholarships through this program, enabling them to pursue higher education without financial barriers.",
      },
      {
        src: "https://picsum.photos/seed/nya-read5/600/450",
        caption: "Child Labor Prevention Program",
        description:
          "We work with families and local authorities to identify and rehabilitate child labourers, ensuring every child has the right to education and a safe childhood.",
      },
      {
        src: "https://picsum.photos/seed/nya-read6/600/450",
        caption: "Quality & Value Education Program",
        description:
          "This program integrates life-skills, moral values, and creative thinking into the standard school curriculum, nurturing well-rounded individuals in our communities.",
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
          "Volunteers from across the region come together to serve marginalised communities through free health camps, food drives, and community support activities.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc2/600/450",
        caption: "Community Awareness & Empowerment Program",
        description:
          "Workshops and awareness drives empower community members with knowledge about their rights, government schemes, and pathways to self-sufficiency.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc3/600/450",
        caption: "Community Health & Safety Program",
        description:
          "Regular health screenings, first-aid training, and sanitation awareness campaigns help rural families stay safe and healthy throughout the year.",
      },
      {
        src: "https://picsum.photos/seed/nya-bpc4/600/450",
        caption: "Community Swachh Bharat Program",
        description:
          "In alignment with the national Swachh Bharat Mission, our teams organise cleanliness drives and help construct sanitation facilities in villages.",
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
          "We facilitate the formation of women-led Self-Help Groups that provide microfinance, skills training, and a support network for rural women entrepreneurs.",
      },
      {
        src: "https://picsum.photos/seed/nya-we2/600/450",
        caption: "Vocational Training Program",
        description:
          "Tailoring, handloom weaving, and food-processing vocational courses equip women with marketable skills and a path to financial independence.",
      },
      {
        src: "https://picsum.photos/seed/nya-we3/600/450",
        caption: "Women Leadership Program",
        description:
          "Leadership workshops and mentoring sessions help women take active roles in village governance, community decision-making, and local advocacy.",
      },
    ],
  },
];

/* Hero strip images — landscape shots for the banner */
const HERO_IMAGES = [
  "https://picsum.photos/seed/nya-h1/400/220",
  "https://picsum.photos/seed/nya-h2/400/220",
  "https://picsum.photos/seed/nya-h3/400/220",
  "https://picsum.photos/seed/nya-h4/400/220",
  "https://picsum.photos/seed/nya-h5/400/220",
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="gallery-hero" aria-label="Photo Gallery hero banner">
        <div className="gallery-hero-strip" aria-hidden="true">
          {HERO_IMAGES.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" />
          ))}
        </div>
        <h1 className="gallery-hero-title">Photo Gallery</h1>
      </section>

      {/* ── Page body ── */}
      <div className="gallery-page">
        {/* Section description */}
        <div className="gallery-section-header">
          <h2>Photo Gallery</h2>
          <p>
            We captured the real life of rural children and the communities for
            you. No photo matches the experience you get when you join us in
            serving people in need in rural areas. The gallery has images that
            give you a glimpse of various aspects of our projects &amp; programs.
          </p>
        </div>

        {/* Category grids + lightbox (client component) */}
        <GalleryGrid categories={GALLERY_DATA} />
      </div>
    </>
  );
}
