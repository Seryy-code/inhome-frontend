import AboutType1 from "./about_project/Type1"
import AboutType2 from "./about_project/Type2"
import AboutType3 from "./about_project/Type3"
import LocationType1 from "./location/Type1"
import LocationType2 from "./location/Type2"
import LocationType3 from "./location/Type3"
import AmenitiesType1 from "./amenities/Type1"
import PhotoType1 from "./photo/Type1"
import PhotoType2 from "./photo/Type2"
import PhotoType3 from "./photo/Type3"
import PhotoType4 from "./photo/Type4"

const PAGE_MAP = {
  aboutProject: {
    1: AboutType1,
    2: AboutType2,
    3: AboutType3,
  },
  location: {
    1: LocationType1,
    2: LocationType2,
    3: LocationType3
  },
  amenities: {
    1: AmenitiesType1
  },
  photo: {
    1: PhotoType1,
    2: PhotoType2,
    3: PhotoType3,
    4: PhotoType4
  }
}

function PageRenderer({ section, page }) {
  const SectionMap = PAGE_MAP[section]
  if (!SectionMap) return null

  const Component = SectionMap[page.type]
  if (!Component) return null

  return <Component data={page} />
}

export default PageRenderer
