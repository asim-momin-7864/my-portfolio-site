import { Download, Eye } from "lucide-react";
import { links } from "@/lib/data";
import { ButtonLink, Card, Section } from "./ui";

export function Resume() {
  return (
    <Section id="resume" title="Resume">
      <Card className="p-5">
        <p className="text-gray-700">One page. Updated {new Date().getFullYear()}.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ButtonLink href={links.resumeView} external><Eye className="h-4 w-4" /> View</ButtonLink>
          <ButtonLink href={links.resumeView} variant="outline" download><Download className="h-4 w-4" /> Download PDF</ButtonLink>
        </div>
        <iframe src={`${links.resumeView}#view=FitH`} title="Resume preview"
                className="mt-5 hidden h-[560px] w-full rounded-lg border border-gray-200 md:block" />
      </Card>
    </Section>
  );
}
