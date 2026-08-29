import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy — Back Repo" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy describes the data Back Repo collects and how it is used.
      </p>
      <p>
        <strong className="text-paper">Data collected.</strong> Order records,
        payment references (via Cash App), and age-verification consent.
      </p>
      <p>
        <strong className="text-paper">Use.</strong> Data is used solely to
        fulfill digital downloads and meet legal obligations.
      </p>
      <p>
        <strong className="text-paper">Retention.</strong> Records are retained
        as required by applicable law and deleted thereafter.
      </p>
      <p>
        <strong className="text-paper">Contact.</strong> Requests regarding
        your data can be directed to the site operator.
      </p>
    </LegalPage>
  );
}
