import HomeSection from './HomeSection/HomeSection'
import LocationSection from './LocationSection/LocationSection'
import ProjectSection from './ProjectSection/ProjectSection'
import MasterplanSection from './MasterplanSection/MasterplanSection'
import AmenitiesSection from './AmenitiesSection/AmenitiesSection'
import PhotoSection from './PhotoSection/PhotoSection'
import PaymentSection from './PaymentSection/PaymentSection'

const SECTION_COMPONENTS = {
  home: HomeSection,
  project: ProjectSection,
  location: LocationSection,
  masterplan: MasterplanSection,
  amenities: AmenitiesSection,
  photo: PhotoSection,
  payment: PaymentSection,
};

export default function PageRenderer({ sections }) {
  return (
    <>
      {sections.map((item, index) => {
        const SectionComponent = SECTION_COMPONENTS[item.section];

        if (!SectionComponent) return null;

        return (
          <SectionComponent
            key={`${item.section}-${index}`}
            section={item} 
          />
        );
      })}
    </>
  );
}
