import { Profile } from "./components/Profile";
import { CoverLetter } from "./components/CoverLetter";
import { EmploymentHistory } from "./components/EmploymentHistory";

/**
 * Mock Info
 */
import userInfo from "@/mocks/userInfo";
import { Details } from "./components/Details";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex flex-row space-x-3" id="about">
        <Profile {...userInfo.about} />
      </section>
      <section className="grid grid-cols-6 gap-4 w-full">
        <div className="col-span-6 sm:col-span-4 space-y-3">
          <CoverLetter>
            {userInfo.coverLetter.text}
          </CoverLetter>

          <EmploymentHistory experience={userInfo.experience} />
          <Education {...userInfo.education.school}/>
          <Languages {...userInfo.language}/>
        </div>
        <div className="col-span-6 sm:col-span-2 space-y-3">
          <Details {...userInfo.details}/>
          <Skills skills={userInfo.skills} />
        </div>
      </section>
    </main>
  );
}
