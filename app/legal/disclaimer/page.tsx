import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Legal Disclaimer — Back Repo" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Legal Disclaimer">
      <p>
        Back Repo provides digital design files (.stl) for personal, lawful use.
        This page is not legal advice.
      </p>
      <p>
        <strong className="text-paper">No physical goods.</strong> We do not
        manufacture, sell, or ship any firearm, receiver, frame, or component.
      </p>
      <p>
        <strong className="text-paper">Buyer responsibility.</strong> You are
        responsible for determining whether accessing or manufacturing from
        these files is lawful where you reside.
      </p>
      <p>
        <strong className="text-paper">Age.</strong> Access is restricted to
        verified adults (18+).
      </p>
      <p>
        <strong className="text-paper">As-is.</strong> Files are provided
        without warranty of accuracy, fitness, or safety.
      </p>
    </LegalPage>
  );
}
