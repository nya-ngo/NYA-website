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
    title: "Watershed Development",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-ws1/600/450",
        caption: "Check Dam Construction",
        description:
          "Restoring water security in drought-prone Rayalaseema through hydrological planning, community-led construction and natural-resource governance.",
      },
      {
        src: "https://picsum.photos/seed/nya-ws2/600/450",
        caption: "Farm Pond Development",
        description:
          "Over 22,000 acres of degraded land treated through rock-fill dams, percolation tanks and gully plugs built alongside local communities.",
      },
      {
        src: "https://picsum.photos/seed/nya-ws3/600/450",
        caption: "Watershed Committee Training",
        description:
          "Capacity building of village-level Watershed Committees to sustain and manage water infrastructure over the long term.",
      },
      {
        src: "https://picsum.photos/seed/nya-ws4/600/450",
        caption: "Community Water Harvesting",
        description:
          "142+ check dams and 87 farm ponds built through participatory planning, ensuring water availability even through dry seasons.",
      },
    ],
  },
  {
    title: "Sustainable Agriculture & FPOs",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-ag1/600/450",
        caption: "Farmer Producer Organizations",
        description:
          "Mobilising smallholders into Farmer Producer Organizations to access better markets, credit and collective bargaining power.",
      },
      {
        src: "https://picsum.photos/seed/nya-ag2/600/450",
        caption: "Natural Farming Demonstrations",
        description:
          "Natural farming practised on 1,200+ acres, reducing input costs and improving soil health for future generations.",
      },
      {
        src: "https://picsum.photos/seed/nya-ag3/600/450",
        caption: "Millets Revival Program",
        description:
          "Millet-based cropping demonstrations championing climate-resilient varieties and reviving traditional food security crops.",
      },
      {
        src: "https://picsum.photos/seed/nya-ag4/600/450",
        caption: "Post-Harvest Infrastructure",
        description:
          "Supporting 4 FPOs covering 3,200+ farmers with post-harvest storage, processing infrastructure and direct market linkages.",
      },
    ],
  },
  {
    title: "Women's Empowerment",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-we1/600/450",
        caption: "Self-Help Group Federation",
        description:
          "320 SHGs federated with 4,800 women members, linked with savings, credit and leadership roles in village institutions.",
      },
      {
        src: "https://picsum.photos/seed/nya-we2/600/450",
        caption: "Microenterprise Training",
        description:
          "Livelihoods training and seed capital provided to enable women to start and sustain their own microenterprises.",
      },
      {
        src: "https://picsum.photos/seed/nya-we3/600/450",
        caption: "Government Entitlements Access",
        description:
          "Women supported to access PDS, MGNREGS and other government entitlements through awareness and para-legal support.",
      },
    ],
  },
  {
    title: "Child Rights & Education",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-ch1/600/450",
        caption: "School Awareness Programmes",
        description:
          "Awareness programmes conducted in 86 schools reaching 14,000 children on rights, safety and the value of staying in school.",
      },
      {
        src: "https://picsum.photos/seed/nya-ch2/600/450",
        caption: "Child Rescue & Reintegration",
        description:
          "47 children rescued from labour and trafficking situations and reintegrated into family care and formal education.",
      },
      {
        src: "https://picsum.photos/seed/nya-ch3/600/450",
        caption: "Bridge Education Centres",
        description:
          "Bridge education provided to school dropouts to help them re-enter the formal system with age-appropriate learning support.",
      },
    ],
  },
  {
    title: "Health & Nutrition",
    photos: [
      {
        src: "https://picsum.photos/seed/nya-hn1/600/450",
        caption: "Community Health Camps",
        description:
          "Health camps conducted in 20 villages providing free check-ups, medicines and referrals for maternal and child health.",
      },
      {
        src: "https://picsum.photos/seed/nya-hn2/600/450",
        caption: "Nutrition Awareness Sessions",
        description:
          "Nutrition awareness sessions reached 5,000+ families with guidance on balanced diets, breastfeeding and child growth monitoring.",
      },
      {
        src: "https://picsum.photos/seed/nya-hn3/600/450",
        caption: "Community Health Workers",
        description:
          "Training of community health workers to deliver frontline health services and link families with government health schemes.",
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
