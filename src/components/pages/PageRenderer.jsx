import AboutType1 from "./about_project/Type1"
import AboutType2 from "./about_project/Type2"
import AboutType3 from "./about_project/Type3"

const PAGE_MAP = {
  aboutProject: {
    1: AboutType1,
    2: AboutType2,
    3: AboutType3,
  },
}

function PageRenderer({ section, page }) {
  const SectionMap = PAGE_MAP[section]
  if (!SectionMap) return null

  const Component = SectionMap[page.type]
  if (!Component) return null

  return <Component data={page} />
}

export default PageRenderer
