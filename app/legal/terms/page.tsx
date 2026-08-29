import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Terms of Service — Back Repo" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms govern access to Back Repo and the purchase of digital STL
        design files. By using the site you agree to these Terms.
      </p>
      <p>
        1. <strong className="text-paper">Digital goods only.</strong> All
        products are downloadable files. No physical items are sold.
      </p>
      <p>
        2. <strong className="text-paper">Eligibility.</strong> You must be 18
        or older and legally permitted to access the files in your
        jurisdiction.
      </p>
      <p>
        3. <strong className="text-paper">License.</strong> Purchased files are
        licensed for personal, lawful use. Resale or redistribution is
        prohibited.
      </p>
      <p>
        4. <strong className="text-paper">Payment.</strong> All payments are
        processed via Cash App. Sales are final; downloads are delivered after
        verified payment.
      </p>
      <p>5. <strong className="text-paper">Liability.</strong> Files are
        provided &ldquo;as-is&rdquo; without warranty. Buyers assume all
        responsibility for lawful use and manufacturing outcomes.</p>
    </LegalPage>
  );
}
