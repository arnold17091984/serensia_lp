import McyFv from "@/components/mcy/McyFv";
import McyKvGuide from "@/components/mcy/McyKvGuide";
import McyMangaSection from "@/components/mcy/McyMangaSection";
import McyBusinessSupport from "@/components/mcy/McyBusinessSupport";
import McyProblems from "@/components/mcy/McyProblems";
import McyGallery from "@/components/mcy/McyGallery";
import McyReasons from "@/components/mcy/McyReasons";
import McyReviews from "@/components/mcy/McyReviews";
import McyPricing from "@/components/mcy/McyPricing";
import McyCta from "@/components/mcy/McyCta";
import McyTrust from "@/components/mcy/McyTrust";
import McyClosing from "@/components/mcy/McyClosing";
import McyFooter from "@/components/mcy/McyFooter";
import McyStickyCta from "@/components/mcy/McyStickyCta";
import McyReviewsModal from "@/components/mcy/McyReviewsModal";

/**
 * KV artwork leads; duplicated HTML worry/price overview blocks stay out of flow.
 * No fixed top header (T-99): the logo lives in KV01 and the sticky bottom bar
 * carries the contact actions once the FV buttons scroll away.
 */
export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-[520px] bg-white">
        <McyFv />
        <McyKvGuide />
        <McyMangaSection />
        <McyBusinessSupport />
        <McyProblems />
        <McyGallery />
        <McyReasons />
        <McyReviews />
        <McyPricing />
        <McyCta tone="light" />
        <McyTrust />
        <McyClosing />
        <McyCta tone="light" />
        <McyFooter />
      </main>
      <McyStickyCta />
      <McyReviewsModal />
    </>
  );
}
